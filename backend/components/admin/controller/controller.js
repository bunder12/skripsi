require('dotenv').config();
const Admin = require('../models/models');
const Member = require('../../user/modeluser/models')
const AdminWisata = require("../../user/modelwisata/model")
const Kategori = require("../modelkategori/modelkategori")
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Formidable  = require('formidable');
const path = require('path');
const fs = require('fs');

exports.daftarAdmin = async (req, res) => {
    const { username, password} = req.body

    const hashPassword = await bcryptjs.hash(password, 10) 
    const add = new Admin({
        username: username,
        password: hashPassword,
    })
    add.save()

    return res.status(201).json({
        message: "berhasil didaftar"
    })
}

exports.LoginAdmin = async (req, res) => {
    const { username, password } = req.body

    const datauser = await Admin.findOne({username: username})
    if(datauser) {
        const passwordUser = await bcryptjs.compare(password, datauser.password)
        if(passwordUser) {
            const data = {
                id: datauser._id
            }
            const token = await jwt.sign(data, process.env.JWT_SECRET)
            return res.status(200).json({
                message: 'Berhasil',
                token: token
            })
        }      
    } else {
        return res.status(404).json({
            message: 'user atau pass salah'
        })
    }
}

exports.uploadData = (req, res) => {
    // const { kategori_id, wisata, deskripsi, lat, lang, urlMap, gambar } = req.body
    const form = new Formidable.IncomingForm()
    form.multiples = true
    form.keepExtensions = true

    
    form.parse(req, async (err, fields, files) => {
        const { kategori_id, wisata, deskripsi, lat, lang, urlMap} = fields
        const { gambar } = files
        
        let post = new AdminWisata()
        post.kategori_id = kategori_id
        post.wisata = wisata
        post.deskripsi = deskripsi
        post.lat = lat
        post.lang = lang
        post.urlMap = urlMap
        post.gambar = gambar.originalFilename
        await post.save()
    })
    
    form.on('fileBegin', function (name, file){
        if(name){
            file.filepath = path.resolve('./assets/gambar', file.originalFilename);
        }
    })

    form.on('end', () => {
        return res.status(201).json({
            message: 'Berhasil di Upload'
        })
    })
}

exports.getSingleImage = (req, res) => {
    const {namaImage} = req.params
    fs.readFile(`./assets/gambar/${namaImage}`,(err, data) => {
        res.writeHead(200, {
            'Content-Type': 'image/png'
        })
        res.end(data)
    })
}

exports.getDataWisata = async (req, res) => {
    const dataWisata = await AdminWisata.find().select('_id kategori_id wisata deskripsi lat lang urlMap gambar totalRating')
    return res.status(200).json({
        status: true,
        data: dataWisata
    })
}

exports.getKategori = async (req, res) => {
    const kategori = await Kategori.find().select('_id kategori')
    return res.status(200).json({
        status: true,
        data: kategori
    })
}

exports.updateWisata = async (req, res) => {
    const {id} = req.params
    const{wisata, deskripsi, lat, lang, urlMap} = req.body

    const post = await AdminWisata.findOne({_id: id}).select('-__v')
    if(wisata != ""){
        post.wisata = wisata
    }
    if(deskripsi != ""){
        post.deskripsi = deskripsi
    }
    if(lat != ""){
        post.lat = lat
    }
    if(lang != ""){
        post.lang = lang
    }
    if(urlMap != ""){
        post.urlMap = urlMap
    }
    await post.save()
}

exports.deleteWisata = async (req, res) => {
    const {id} = req.params
    await AdminWisata.findOneAndDelete({_id: id})
    return res.status(201).json({
        status: true,
        message: "Berhasil di hapus"
    })
}

exports.getMember = async (req, res) => {
    const member = await Member.find().select('-__v')
    return res.status(200).json({
        message: 'berhasi di panggil',
        data: member
    })
}
