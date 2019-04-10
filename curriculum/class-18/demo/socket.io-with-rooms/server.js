'use strict';

const io = require('socket.io')(3333);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);
  socket.on('speak', (payload) => {
    io.emit('message', payload);
  });
});

const school = io.of('/school');
school.on('connection', (socket) => {

  console.log('SCHOOL', socket.id);

  socket.on('speak', (payload) => {
    school.emit('message', payload);
  });

  socket.on('challenge', (payload) => {
    console.log('emitting to the codefellows room');
    school.to('codefellows').emit('challenge', payload);
  });

  socket.on('join', (room) => {
    console.log('Joined', room);
    socket.join(room);
  });



});
