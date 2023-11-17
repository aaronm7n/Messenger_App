const express = require('express');
const router = express.Router();

const checkSignIn = (req, res, next) => {
    if(req.session.user){
        
        return next(); //If session exists, proceed to page
    } else {
        const err = new Error("Not logged in!");
        err.status = 400;
        return next(err); //Error, trying to access unauthorized page!
    }
};

router.use('/static', express.static('public'));

router.get('/', checkSignIn, (req, res) => {
    res.sendFile('general_chat.html', { root: './views'});
});

// export this router to use in our index.js
module.exports = router;