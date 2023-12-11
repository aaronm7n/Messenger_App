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
        maxlength: 64
    },
    online: {
        type: Boolean,
        required: true
    }
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel