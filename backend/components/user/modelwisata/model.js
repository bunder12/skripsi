const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    wisata: {
        type: String
    },
    deskripsi: {
        type: String
    },
    lat: {
        type: String
    },
    lang: {
        type: String
    },
    urlMap: {
        type: String
    },
    gambar: {
        type: String
    },
    totalRating: {
        type: Number
    }
})

module.exports = mongoose.model('Wisata', userSchema);