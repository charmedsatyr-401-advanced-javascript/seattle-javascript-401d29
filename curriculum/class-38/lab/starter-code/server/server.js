const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

io.on('connection', socket => {

  console.log('Connected', socket.id);

  socket.on('troll', (payload) => {
    console.log('broadcast', payload);
    socket.broadcast.emit('incoming', payload);
  });

});



