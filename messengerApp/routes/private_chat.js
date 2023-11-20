const express = require('express');
const router = express.Router();
const Room = require('../models/room.js');

router.get('/', (req, res) => {
    const roomname = req.session.room.roomName;
    res.render('private_chat', {roomName: roomname});
    
    
    console.log(roomname);
});


// export this router to use in our index.js
module.exports = router;