const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    konfirPass: {
        type: String
    },
    resetPassword: {
        data: String,
        default: ''
    }
})

module.exports = mongoose.model('Loginuser', userSchema);