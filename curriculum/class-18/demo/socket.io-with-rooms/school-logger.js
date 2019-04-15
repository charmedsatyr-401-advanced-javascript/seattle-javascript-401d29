'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3333/school');

socket.on('message', (payload) => {
  console.log('school message', payload);
});


