const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

// Signup GET Request
router.get('/', (req, res) => {
    res.render('signup');
});

// Signup POST Request
router.post('/', async (req, res) => {
    var userInfo = await req.body; // Get the parsed information
    if(!userInfo.username || !userInfo.password) {
        res.render('signup_results', {
            message: "Sorry, you have not provided all of the required information",
            type: "error"
        });
    }
    else {
        var hashed = await bcrypt.hashSync(userInfo.password, salt);
        var newUser = new User({
            username: userInfo.username,
            password: hashed
        });

        // This prevents ant duplicate usernames
        const user = await User.findOne({ username: newUser.username });
        if(!user){
            newUser.save()
            .then( (result) => {
                res.render('signup_results', {message: "New user added", type: "success", user: userInfo});
            })
            .catch( (err) => {
                res.render('signup_results', {message: "Database error", type: "error"})
            })
        }
        else {
            res.render('signup_results', {
                message: "Sorry, This username is taken!",
                type: "error"
            });
        }
    }
});

// export this router to use in our index.js
module.exports = router;