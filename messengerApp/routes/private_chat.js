const express = require('express');
const router = express.Router();
const Room = require('../models/room.js');

const checkSignIn = (req, res, next) => {
    if(req.session.user){
        
        return next(); //If session exists, proceed to page
    } else {
        const err = new Error("Not logged in!");
        err.status = 400;
        return next(err); //Error, trying to access unauthorized page!
    }
}; 

router.get('/', (req, res) => {
    const username = req.session.user.username;
    console.log(username);
    //res.sendFile(`private_chat.html?u=${username}`, { root: './views'});
    res.render('private_chat.ejs', { uname: username });
});

// export this router to use in our index.js
module.exports = router;