// Module imports
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const upload = multer();

const port = process.env.PORT || 3000;

const username = "mcclellana4"
const password = "aIPQf0amOPaHchbI"
const cluster = "messengerdb.rsgrfzu";
const dbname = ""; // defaults to "test" if left blank

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Mongoose setup and connection
const mongoose = require('mongoose');
const mongoose_settings = {useNewUrlParser: true};

mongoose.connect(uri, mongoose_settings);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected successfully to MongoDB");
})

const User = require('./models/user');

// View setup
app.set('view engine', 'pug');
app.set('views', './views')

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "Apple"}));
app.use('/css', express.static('css'));

// Signup GET Request
app.get('/signup', (req, res) => {
    res.render('signup');
});

// Signup POST Request (Still need to create User schema)
app.post('/signup', async (req, res) => {
    var userInfo = await req.body; // Get the parsed information
    if(!userInfo.username || !userInfo.password) {
        res.render('signup_results', {
            message: "Sorry, you have not provided all of the rquired information",
            type: "error"
        });
    }
    else {
        var newUser = new User({
            username: userInfo.username,
            password: userInfo.password
        });

        newUser.save()
        .then( (result) => {
            res.render('signup_results', {message: "New user added", type: "success", user: userInfo});
        })
        .catch( (err) => {
            res.render('signup_results', {message: "Database error", type: "error"})
        })
    }
});

// Error 404 (OTHER ROUTES MUST COME BEFORE THIS)
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(port, () => {
    console.log(`Messanger app listening on port ${port}`);
});