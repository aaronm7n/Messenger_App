const express = require('express');
const router = express.Router();

router.use('/static', express.static('public'));

router.get('/', (req, res) => {
    res.render('general_chat.ejs');
});

// export this router to use in our index.js
module.exports = router;