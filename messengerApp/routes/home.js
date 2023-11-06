const express = require('express');
const router = express.Router();

// Home GET Request
router.get('/', async (req, res) => {
    res.render('home');
});

// export this router to use in our index.js
module.exports = router;