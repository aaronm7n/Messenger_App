// Module imports
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const upload = multer();

const port = process.env.PORT || 3000;

const username = "admin"
const password = "5Vb5EswuNxFZgD6h"
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
});

// View setup
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/css', express.static('css'));

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "Apple"}));


// Routing setup
const home = require('./routes/home.js');
app.use('/', home);
const signup = require('./routes/signup.js');
app.use('/signup', signup);
const login = require('./routes/login.js');
app.use('/login', login);
const logout = require('./routes/logout.js');
app.use('/logout', logout);
const protected_page = require('./routes/protected_page.js');
app.use('/protected_page', protected_page);
const update = require('./routes/update.js');
app.use('/update', update);
const deletetion = require('./routes/delete.js');
app.use('/delete', deletetion);


// Error 404 (OTHER ROUTES MUST COME BEFORE THIS)
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(port, () => {
    console.log(`Messanger app listening on port ${port}`);
});