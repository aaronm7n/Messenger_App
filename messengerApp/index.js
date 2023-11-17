// Module imports
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const upload = multer();

const port = process.env.PORT || 3001;

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
const genChat = require('./routes/general_chat.js');
app.use('/general_chat', genChat);

// Error 404 (OTHER ROUTES MUST COME BEFORE THIS)
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});

io.on('connection', (socket) => {
    console.log('a user connected to general chat');
    socket.on('disconnect', () => {
        console.log('a user disconnected from general chat')
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log(`Server running on https://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`Messanger app listening on port ${port}`);
});