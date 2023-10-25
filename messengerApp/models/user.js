const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 16
    },
    password: {
        type: String,
        required: true,
        maxlength: 32
    }
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel