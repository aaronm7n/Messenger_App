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

router.get('/', checkSignIn, (req, res) => {
    const username = req.session.user.username; // Get the username from the session for message
    res.render('protected_page.ejs', {id: username})
});

router.use('/', (err, req, res, next) => {
    res.redirect('/login');
});

// export this router to use in our index.js
module.exports = router;