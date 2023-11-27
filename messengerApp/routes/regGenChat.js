const express = require('express');
const router = express.Router();

router.use('/static', express.static('public'));

router.get('/', (req, res) => {
    res.sendFile('regGenChat.html', { root: './views'},);
});

// export this router to use in our index.js
module.exports = router;