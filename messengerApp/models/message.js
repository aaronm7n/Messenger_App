const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        maxlength: 200
    },
    roomname: {
        type: String,
        required: true,
        maxlength: 16
    }
})

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel