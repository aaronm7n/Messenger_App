const express = require('express');
const router = express.Router();
const Room = require('../models/room.js');
const $ = require('jquery')

router.get('/', (req, res) => {
    const roomname = req.session.room.roomName;
    res.sendFile('private_chat.html', { root: './views'});
    
    
    //console.log(roomname);
});


// export this router to use in our index.js
module.exports = router;