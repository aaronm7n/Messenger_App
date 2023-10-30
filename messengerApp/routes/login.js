const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Login GET Request
router.get('/', (req, res) => {
    res.render('login');
});

// Login POST Request
router.post('/', async (req,res) => {
    const { id, password } = req.body// cleans up comparing id and password

    if(!id || !password){
        res.render('login', {message: "Please enter both id and password"});
        return;
    }

    const user = await User.findOne({ username: id});
    // cant believe this worked but ok 
    // finds user in database
    
    if(!user){
        return res.render('login', { message: "Hey you arent a user! Sign Up!"})
    }

    if(user.password === password){
        req.session.user = user;
        return res.redirect('/protected_page')
    }
    else{
        return res.render('login', { message: "Uh oh! Invalid Credentials!"})
    }
});

// export this router to use in our index.js
module.exports = router;