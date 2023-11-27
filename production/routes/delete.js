const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

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
    res.render('delete');
    
});

// This allows us to know which user is currently logged in so we know what data to change
router.use (function(req, res, next) {
    res.locals.currentUser = req.session.user.username;
    next();
});

router.post('/', async (req, res) => {
    const { id, password, Delete } = req.body // Makes comparing id and passwords easier
    const username = req.session.user.username;
    const user = await User.findOne({ "username": username});

    if(await bcrypt.compareSync(Delete,user.password )){
        var ack,count = await User.deleteOne({"username": username})
        if(ack==true&& count ==1){
            res.render('profiledeleted', {message: "Success!"})
        }
        else 
            res.render('profiledeleted', {message: "There was an error deleting your prfile.", Type: "error"})

    }
    else{
        res.render('delete', {message: "Please enter password to delete profile"})
    }
});

router.use('/', (err, req, res, next) => {
    res.redirect('/login');
});

// export this router to use in our index.js
module.exports = router;