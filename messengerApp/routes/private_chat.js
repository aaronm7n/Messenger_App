const express = require('express');
const router = express.Router();
const Room = require('../models/room.js');

router.get('/', (req, res) => {
    res.sendFile('private_chat.html', { root: './views'});
    const roomname = req.session.room.roomName;
});


// export this router to use in our index.js
module.exports = router;