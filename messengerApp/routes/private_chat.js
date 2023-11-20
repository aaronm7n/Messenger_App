const express = require('express');
const router = express.Router();
const Room = require('../models/room.js');

router.get('/', (req, res) => {
    res.sendFile('private_chat.html', { root: './views'});
});


// export this router to use in our index.js
module.exports = router;