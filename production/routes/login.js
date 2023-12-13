const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');


// Login GET Request
router.get('/', (req, res) => {
    res.render('login.ejs', {message: ""});
});

// Login POST Request
router.post('/', async (req,res) => {
    const { username, password } = req.body// cleans up comparing username and password
    if(!username || !password){
        console.log(username)
        console.log(password)
        res.render('login', {message: "Please enter both id and password"});
        return;
    }

    const user = await User.findOne({ username: username});
    // cant believe this worked but ok 
    // finds user in database
    
    if(!user){
        return res.render('login.ejs', { message: "Hey you arent a user! Sign Up!"})
    }

    if( await bcrypt.compareSync(password,user.password )){
        req.session.user = user;
        const id = user._id;
        const hashed = user.password;
        await User.findOneAndUpdate(
            { _id: id},
            { online: true },
            { new: true }
        );
        return res.redirect('/protected_page')
    }
    else{
        return res.render('login.ejs', { message: "Uh oh! Invalid Credentials!"})
    }
});

// export this router to use in our index.js
module.exports = router;