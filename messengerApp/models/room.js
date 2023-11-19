const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true,
        maxlength: 16
    },
    roomCode: {
        type: String,
        required: true,
        maxlength: 64
    },
    admin: {
        type: String,
        required: true,
        maxlength: 16
    },
    userList: {
        type: [Users],
        required: true,
    }
});

const RoomModel = mongoose.model('Room', RoomSchema);

module.exports = RoomModel;