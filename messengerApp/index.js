// Module imports
const express = require('express');
const app = express();
const Room = require('./models/room.js');
const httpServer = require('http').createServer(app);
const io  = require("socket.io")(httpServer, {
    // ...
});
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Message = require('./models/message.js');

const upload = multer();


const port = process.env.PORT || 3000;


const username = "admin"
const password = "5Vb5EswuNxFZgD6h"
const cluster = "messengerdb.rsgrfzu";
const dbname = "team07-messenger"; // defaults to "test" if left blank

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
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/css', express.static('css'));

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
const sessionMiddleware = session({
    secret: "changeit",
    resave: true,
    saveUninitialized: true,
});

app.use(sessionMiddleware);


// Routing setup
const home = require('./routes/home.js');
app.use('/', home);
const signup = require('./routes/signup.js');
app.use('/signup', signup);
const add_to_room = require('./routes/add_to_room.js');
app.use('/add_to_room', add_to_room);
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
const createRoom = require('./routes/create_room.js');
app.use('/create_room', createRoom);
const genChat = require('./routes/general_chat.js');
app.use('/general_chat', genChat);
const prvChat = require('./routes/private_chat.js');
app.use('/private_chat', prvChat);
const regGenChat = require('./routes/regGenChat.js');
app.use('/regGenChat', regGenChat);

// Error 404 (OTHER ROUTES MUST COME BEFORE THIS)
app.get('*', (req, res) => {
    res.render('home.ejs');
});

io.on('connection', async (socket) => { 
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('a user disconnected')
        if (socket.room != 'generalChat') {
            io.to(socket.room).emit('chat message', `${socket.username} is now offline!`);
            socket.leave(socket.room)
        }
        else {
            io.to(socket.room).emit('chat message', `Annonymous User ${socket.id} is now offline!`);
            socket.leave(socket.room)
        }
    });

    socket.on('joinRoom', async (room, roomCode, user) => {
        const access = await (userAccess(room, roomCode, user));
        console.log(access);
        socket.username = 'Annonymous'
        if (room != 'generalChat') {
            if (room != 'regGenChat') {
                if (access === true) {
                    console.log(`${socket.id} just joined the room ${room}`);
                    if (socket.room) {
                        socket.leave(socket.room)
                    }
                    socket.join(room);
                    socket.room = room;
                    socket.username = user;
                    io.to(socket.room).emit('chat message', `${socket.username} is now online!`);
                    previousMessages(socket, `${room}`);//display previous messages in room
                }
        
                if (access === false) {
                    console.log('User does not have access');
                }
            }
            else {
                console.log(`${socket.id} just joined the room ${room}`);
                    if (socket.room) {
                        socket.leave(socket.room)
                    }
                    socket.join(room);
                    socket.room = room;
                    socket.username = user;
                    io.to(socket.room).emit('chat message', `${socket.username} is now online!`);
                    previousMessages(socket, `${room}`);//display previous messages in room
            }
            
        }
        else {
            console.log(`${socket.id} just joined the room ${room}`);
                if (socket.room) {
                    socket.leave(socket.room)
                }
                socket.join(room);
                socket.room = room;
                socket.username = user;
                io.to(socket.room).emit('chat message', `Annonymous User ${socket.id} is now online!`);
                previousMessages(socket, 'generalChat');//display previous messages in room
        }
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });

    socket.on('chat message', (msg) => {
        console.log(socket.room);
        if(socket.room != 'generalChat'){
            var newMessage = new Message({
                message: msg,
                roomname: socket.room,
                username: socket.username
            }); 
            newMessage.save();
            io.to(socket.room).emit('chat message', `${socket.username}: ` + newMessage.message);
        }
        else {
            var newMessage = new Message({
                message: msg,
                roomname: socket.room,
                username: socket.username
            }); 
            newMessage.save();
            io.to(socket.room).emit('chat message', `Annonymous User ${socket.id}: ` + newMessage.message);
        }
        
    });

    // Unfinished
    socket.on('typing', function (data) {
        socket.broadcasr.emit('typing', data);
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
        socket.emit('chat message', message.username + ": " + message.message)//displays message text
    })
};

async function userAccess(room, roomCode, user) {
    const userAccess = await Room.findOne({ roomName: room, roomCode, roomCode});
    if (!userAccess) {
        console.log('This room does not exist');
    }
    else {
        return (userAccess.userList.includes(user));
    }
};

httpServer.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});

// app.listen(port, () => {
//     console.log(`Messanger app listening on port ${port}`);
// }); 