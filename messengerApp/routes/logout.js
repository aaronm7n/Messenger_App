const express = require('express');
const router = express.Router();

const checkSignIn = (req, res, next) => {
    if(req.session.user){
        
        return next(); //If session exists, proceed to page
    } else {
        const err = new Error("Not logged in!");
        err.status = 400;
        return next(err); //Error, trying to access unauthorized page!
    }
};

// Logout GET Request and Redirection to Login
router.get('/', checkSignIn, (req, res) => {
    let username = req.session.user.username;
    req.session.destroy( () => {
        console.log(`${username} logged out.`)
    });
    res.redirect('/login');
});

// export this router to use in our index.js
module.exports = router;