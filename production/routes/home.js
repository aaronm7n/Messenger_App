const express = require('express');
const router = express.Router();

// Home GET Request
router.get('/', async (req, res) => {
    res.render('home.ejs');
});

// export this router to use in our index.js
module.exports = router;