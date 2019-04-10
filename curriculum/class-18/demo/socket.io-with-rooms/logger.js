'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3333');

socket.on('message', payload => {
  console.log('the message was', payload);
});

socket.on('bizz', payload => {
  console.log('whatever...', payload);
});
