const express = require('express');
const router = express.Router();
const Room = require('../models/room');
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


// Join Room GET Request
router.get('/', checkSignIn, (req, res) => {
    res.sendFile('join_room.html', { root: './views'});
    //res.render('join_room');
});

// This allows us to know which user is currently logged in so we know what data to change
router.use (function(req, res, next) {
    res.locals.currentUser = req.session.user.username;
    next();
});

// Join Room POST Request
router.post('/', async (req,res) => {
    const { roomName, roomCode } = req.body// cleans up comparing id and password
    const room = await Room.findOne({ "roomName": roomName, "roomCode": roomCode});
    const username = req.session.user.username;
    const user = await User.findOne({ "username": username});

    if(!roomName || !roomCode){
        console.log('nothing entered')
        return res.render('signup_results', {message: "Please enter both Room Name and Room Code"});
    }
    else if (!room){
        console.log('no room');
        return res.render('signup_results', {message: "This room does not exist"});
    }
    else{
        if (room.userList.includes(user.username)){
            console.log('redirect should happen here');
            req.session.room = room;
            return res.redirect('/private_chat');
        }
        else {
            return res.render('signup_results', {message: "You have not been given access to this room"});
        }
    }
});

// export this router to use in our index.js
module.exports = router;