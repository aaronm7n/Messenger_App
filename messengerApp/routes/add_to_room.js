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


// Add to room Room GET Request
router.get('/', checkSignIn, (req, res) => {
    res.render('add_to_room');
});

router.use (function(req, res, next) {
    res.locals.currentUser = req.session.user.username;
    next();
});


router.post('/', async (req, res) => {
    roomInfo = await req.body;
    const room = await Room.findOne({ roomName: roomInfo.roomName, roomCode: roomInfo.roomCode })
    console.log(roomInfo);

    if (!roomInfo.roomName || !roomInfo.roomCode || !roomInfo.newUserName) {
        return res.render('add_to_room', { message: "Please enter valid information to add a user!" });
    }
    else if (!room) {
        return res.render('add_to_room', { message: "Room not found!" });
    }
    else {
        const room = await Room.findOneAndUpdate(
            { "roomName": roomInfo.roomName, "roomCode": roomInfo.roomCode },
            { $push: { userList: roomInfo.newUserName } },
            { new: true } // To return the updated document
        );
        console.log(room.userList);
        await room.save();
    
        res.render('add_to_room', { message: "User Added Successfully!" });
        
        console.log("is anything happening at all bro");
    }
});

// This allows us to know which user is currently logged in so we know what data to change

module.exports = router;