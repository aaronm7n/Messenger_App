const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

// Signup GET Request
router.get('/', (req, res) => {
    res.render('signup.ejs', {message: ""});
});

// Signup POST Request
router.post('/', async (req, res) => {
    var userInfo = await req.body; // Get the parsed information
    var passwordStrength = 0;
    for(var i =0; i< 10; i++){
        if(userInfo.password.includes(i)){
            passwordStrength++;
            break;
        }
    }
    do{
        if(userInfo.password.includes('!')){
            passwordStrength++;
            break;
        }
        if(userInfo.password.includes('@')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('#')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('$')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('%')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('^')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('&')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('*')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('(')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes(')')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('-')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('_')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('=')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('+')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('/')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('?')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('[')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('{')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes(']')){
            passwordStrength++;
            break;
        }if(userInfo.password.includes('}')){
            passwordStrength++;
            break;
        }
        if(userInfo.password.includes('\\')){
            passwordStrength++;
            break;
        }
        if(userInfo.password.includes('|')){
            passwordStrength++;
            break;
        }

        break;
    }while(false);
    
    if(userInfo.password.length>9)
        passwordStrength++;
    if(userInfo.password != userInfo.password.toLowerCase())
        passwordStrength++;
    
    if(userInfo.password != userInfo.confirm){
        res.render('signup_results.ejs', {
            message: "Sorry, your passwords do not macth. Please try again.",
            type: "error"
        });
    }
    else if(!userInfo.username || !userInfo.password) {
        res.render('signup_results.ejs', {
            message: "Sorry, you have not provided all of the required information",
            type: "error"
        });
    }
    else if (passwordStrength <=2){
        res.render('signup_results.ejs', {
            message: "Sorry, your password is not strong enough. It must contain 2 of the following: an uppercase character, a number, a special character, or be longer than 10 characters.",
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
                res.render('signup_results.ejs', {message: "New user added", type: "success", user: userInfo.username});
            })
            .catch( (err) => {
                res.render('signup_results.ejs', {message: "Database error", type: "error"})
            })
        }
        else {
            res.render('signup_results.ejs', {
                message: "Sorry, This username is taken!",
                type: "error"
            });
        }
    }
});

// export this router to use in our index.js
module.exports = router;