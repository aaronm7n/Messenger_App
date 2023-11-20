// Module imports
const express = require('express');
const Room = require('./models/room.js');
const http = require('http');
const { Server } = require("socket.io");
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Message = require('./models/message.js');


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
         // This feature will temporarily store all the events that (NOT YET FUNCTIONAL)
         // are sent by the server and will try to restore the state of a client when it reconnects:
    connectionStateRecovery: {}
});
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
const genChat = require('./routes/general_chat.js');
app.use('/general_chat', genChat);
const createRoom = require('./routes/create_room.js');
app.use('/create_room', createRoom);
const joinRoom = require('./routes/join_room.js');
app.use('/join_room', joinRoom);
const prvChat = require('./routes/private_chat.js');
app.use('/private_chat', prvChat);

// Error 404 (OTHER ROUTES MUST COME BEFORE THIS)
app.get('*', (req, res) => {
    res.render('home');
});

io.on('connection', async (socket) => {  
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    });

    

    socket.on('joinRoom', (room) => {
        console.log(`${socket.id} just joined the room ${room}`);
        socket.room = room;//sets the current room for the user
        previousMessages(socket, `${room}`);//display previous messages in room
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });

    socket.on('chat message', (msg) => {
        var newMessage = new Message({
            message: msg,
            roomname: socket.room,
            username: socket.username
        }); 
        newMessage.save();
        io.emit('chat message', `${socket.username}: ${socket.id} ` + newMessage.message);
    });
});

async function previousMessages(socket, room) {
    const messageCount = await Message.countDocuments({ roomname: room});//gets total number of messages

    var messagesToDelete = 0;
    if(messageCount > 50){
        messagesToDelete = messageCount-50;
    }
    for(i = messagesToDelete; i > 0; i--){
        await Message.deleteOne({ "roomname": room})
    }

    const previousMessages = await Message.find({ roomname: room })//gets all previous messages of specefic room
    previousMessages.forEach((message) => {
        socket.emit('chat message', 'Previous Message:' + message.message)//displays message text
    })
}

server.listen(3000, () => {
    console.log(`Server running on https://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`Messanger app listening on port ${port}`);
});