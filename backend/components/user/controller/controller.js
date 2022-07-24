require('dotenv').config();
const User = require('../modeluser/models');
const Wisata = require('../modelwisata/model');
const Rating = require('../../user/modelrating/rating')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { kirimEmail } = require('../email/email')

exports.daftarUser = async (req, res) => {
    const { username, email, password, konfirPass} = req.body

    let userName = await User.findOne({username: username})
    let emailUser = await User.findOne({email: email})

    if(userName && emailUser) {
        return res.status(404).json({
            status: false,
            message: "username dan email sudah terdaftar"
        })
    }

    if(userName) {
        return res.status(404).json({
            status: false,
            message: "username sudah digunakan"
        })
    }

    if(emailUser) {
        return res.status(404).json({
            status: false,
            message: "email sudah terdaftar"
        })
    }

    if(password != konfirPass) {
        return res.status(404).json({
            status: false,
            message: "konfirmasi password tidak sama"
        })
    }

    const hashPassword = await bcryptjs.hash(password, 10) 
    const add = new User({
        username: username,
        email: email,
        password: hashPassword,
    })
    add.save()

    return res.status(201).json({
        message: "berhasil didaftar"
    })
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body

    const datauser = await User.findOne({$or: [{username: username}, {email: username}]})
    if(datauser) {

        const passwordUser = await bcryptjs.compare(password, datauser.password)

        if(passwordUser){
            const data = {
                id: datauser._id
            }
            const token = await jwt.sign(data, process.env.JWT_SECRET)
            return res.status(200).json({
                token: token,
                message: "berhasil"
            })
        }

    }else{
        return res.status(404).json({
            message: "username atau email tidak tersedia"
        })
    }
}

exports.getUser = async (req,res) => {
    const user = await User.findOne({_id: req.id})
    return res.status(200).json({
        message: 'berhasi di panggil',
        data: user
    })
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body

    const user = await User.findOne({email: email})
    if(!user){
        return res.status(200).json({
            status: false,
            message: 'Email tidak terdaftar'
        })
    }

    const token = await jwt.sign({
        iduser: user._id
    }, process.env.JWT_SECRET)

    await user.updateOne({resetPassword: token})

    const templateEmail = {
        from: "'Rekomendasi Wisata Bangka' <no-reply@gmail.com>",
        to: email,
        subject: 'Link Reset Password',
        html: `<p>Silahkan klik link dibawah untuk reset password anda</p> <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`
    }

    kirimEmail(templateEmail);

    return res.status(200).json({
        message: 'Link Reset Password berhasil terkirim'
    })
}

exports.resetPassword = async (req, res) => {
    const { token, password, konfirPass } = req.body

    if(password != konfirPass) {
        return res.status(404).json({
            status: false,
            message: "konfirmasi password tidak sama"
        })
    }

    const user = await User.findOne({ resetPassword: token})
    if(user){
        const hashPassword = await bcryptjs.hash(password, 10)
        user.password = hashPassword
        await user.save()
        return res.status(201).json({
            status: true,
            message: "password berhasil di update"
        })
    }
}

exports.getWisata = async (req, res) => {
    const wisata = await Wisata.find().select('_id kategori_id wisata deskripsi lat lang urlMap gambar totalRating')
    return res.status(200).json({
        message: 'berhasi di panggil',
        data: wisata
    })
}

exports.getWisataId = async (req, res) => {
    const {id} = req.params

    const wisata = await Wisata.find({_id: id}).select('_id kategori_id wisata deskripsi lat lang urlMap gambar totalRating')
    return res.status(200).json({
        message: 'berhasi di panggil',
        data: wisata
    })
}

exports.getNamaUser = async (req, res) => {
    const {id} = req.params

    const user = await User.find({_id: id}).select('username')
    return res.status(200).json({
        message: 'berhasi di panggil',
        data: user
    })
}

exports.addRating = async (req, res) => {
    const { aid, uid, rating, komentar } = req.body

    const add = new Rating({
        aid: aid,
        uid: uid,
        rating: rating,
        komentar: komentar
    })
    add.save()

    return res.status(201).json({
        message: "berhasil memberikan nilai"
    })
}

exports.getRating = async (req, res) => {
    const {id} = req.params
    const rating = await Rating.find({aid: id}).select('_id aid uid rating komentar')
    return res.status(200).json({
        message: 'berhasi di panggil',
        data: rating
    })
}

exports.totalRating = async(req, res) => {
    const {id} = req.params
    const { totalRating } = req.body

    // const rating = await Rating.find().select('aid rating')
    const post = await Wisata.findOne({_id: id}).select('-__v')
    post.totalRating= totalRating
    await post.save()

    // return res.status(201).json({
    //     message: "berhasil memberikan nilai"
    // })
}