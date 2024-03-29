const socket = io();
const header = document.getElementByID('roomName')

socket.emit('joinRoom', header );
            
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
            
form.addEventListener('submit', function(e) {
    e.preventDefault();
        if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});
            
socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});