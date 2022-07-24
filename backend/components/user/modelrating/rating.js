const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    aid: {
        type: mongoose.Schema.Types.ObjectId
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId
    },
    rating: {
        type: Number
    },
    komentar: {
        type: String
    }
})

module.exports = mongoose.model('Rating', userSchema);