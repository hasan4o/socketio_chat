const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);

// socket.io - EVENT-DRIVEN, сервер и клиент слушают события
io.on('connection', socket => {
  console.log('SOEDINENIE');
  socket.emit('your id', socket.id); // сервер испускает событие (event) 'YOUR ID'
  socket.on('send message', body => {
    io.emit('message', body)
  })
})

server.listen(8000, () => console.log('server is running on port 8000'));

