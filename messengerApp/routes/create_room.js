const express = require('express');
const router = express.Router();
const Room = require('../models/room');

const checkSignIn = (req, res, next) => {
    if(req.session.user){
        
        return next(); //If session exists, proceed to page
    } else {
        const err = new Error("Not logged in!");
        err.status = 400;
        return next(err); //Error, trying to access unauthorized page!
    }
};

// Create Room GET Request
router.get('/', checkSignIn, (req, res) => {
    res.render('create_room.ejs', {message: ""});
});

// This allows us to know which user is currently logged in so we know what data to change
router.use (function(req, res, next) {
    res.locals.currentUser = req.session.user.username;
    next();
});

// Create Room POST Request
router.post('/', async (req, res) => {
    var roomInfo = await req.body; // Get the parsed information
    const username = req.session.user.username;
    if(!roomInfo.roomName || !roomInfo.roomCode) {
        res.render('create_room.ejs', {message: "Please enter some information to create your chat room"})
    }
    else {
        var newRoom = new Room({
            roomName: roomInfo.roomName,
            roomCode: roomInfo.roomCode,
            admin: username,
            userList: [] + [username]
        });

        newRoom.save();

        res.render('create_room.ejs', {message: "Room Created Succesfully!"})
    }
})

// export this router to use in our index.js
module.exports = router;