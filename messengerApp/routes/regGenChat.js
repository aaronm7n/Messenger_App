const express = require('express');
const router = express.Router();

router.use('/static', express.static('public'));

router.get('/', (req, res) => {
    const username = req.session.user.username;
    res.render('regGenChat.ejs', { uname: username },);
});

// export this router to use in our index.js
module.exports = router;