const express = require('express');
const router = express.Router();
const User = require('../models/user');


const checkSignIn = (req, res, next) => {
    if(req.session.user){
        
        return next(); //If session exists, proceed to page
    } else {
        const err = new Error("Not logged in!");
        err.status = 400;
        return next(err); //Error, trying to access unauthorized page!
    }
};

// Update GET Request
router.get('/', checkSignIn, (req, res) => {
    res.render('update');
    
});

// This allows us to know which user is currently logged in so we know what data to change
router.use (function(req, res, next) {
    res.locals.currentUser = req.session.user.username;
    next();
});

// Update POST Request
router.post('/', async (req, res) => {
    const { id, password } = req.body // Makes comparing id and passwords easier

    const username = req.session.user.username;

    if(!password){
        res.render('update', {message: "Please enter some information to update your profile"})
    }
    else{
        /*
        const query = await User.findOne({ username: id });
        if(query){
            res.render('update', {
                message: "Sorry, This username is taken!",
            });
            console.log(`Duplicate username`)
        }
        
        None of this currently works, it is supposed to update the username
        if(id && password){
            await User.findOneAndUpdate(
                { username: username },
                { username: id },
                { new: true }
            );
            await User.findOneAndUpdate(
                { username: username },
                { password: password },
                { new: true }
            );
            res.render('update', {
                message: "You have succefully updated your username and password",
            });
        }

        if(id){
            await User.findOneAndUpdate(
                { username: username },
                { username: id },
                { new: true }
            );
            res.render('update', {
                message: "You have succefully updated your username",
            });
        } */

        if(password){
            await User.findOneAndUpdate(
                { username: username},
                { password: password },
                { new: true }
            );
            res.render('update', {
                message: "You have succefully updated your password",
            });
        }
    } 
});

router.use('/', (err, req, res, next) => {
    res.redirect('/login');
});

// export this router to use in our index.js
module.exports = router;