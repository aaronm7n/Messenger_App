const express = require('express');
const router = express.Router();

// Logout GET Request and Redirection to Login
router.get('/', (req, res) => {
    let username = req.session.user.username;
    req.session.destroy( () => {
        console.log(`${username} logged out.`)
    });
    res.redirect('/login');
});

// export this router to use in our index.js
module.exports = router;