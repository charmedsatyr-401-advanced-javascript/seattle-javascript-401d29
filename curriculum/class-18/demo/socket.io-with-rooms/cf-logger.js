'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3333/school');

socket.emit('join', 'codefellows');

socket.on('challenge', (payload) => {
  console.log('Challenge Received', payload);
});
