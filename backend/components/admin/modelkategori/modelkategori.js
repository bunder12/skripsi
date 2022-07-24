const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    kategori: {
        type: String
    },
})

module.exports = mongoose.model('Kategori', userSchema);