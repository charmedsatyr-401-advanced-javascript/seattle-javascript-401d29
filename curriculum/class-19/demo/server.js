'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  socket.on('hi', (payload) => {
    socket.emit('greet', payload);
  });
});

// Codefellows Namespace
const codefellows = io.of('/codefellows');

// For codefellows connections, add some listeners
codefellows.on('connection', (socket) => {
  console.log('Connected to Codefellows', socket.id);
  
  // connect to a room inside of codefellows
  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb(`Joined ${room}`);
  });
  
  // This event gets emitted to anyone in any room in the codefellows namespace
  socket.on('lunch', (payload) => {
    socket.broadcast.emit('eat', 'Go get some lunch');
  }); 
  
  socket.on('homework', (payload) => {
    
    // Only connections in the 'students' room inside of codefellows can hear this
    let grade = Math.floor((Math.random() * 10) + 1);
    socket.in('students').emit('grade', `Grade: ${payload} = ${grade}`);
    
    // Only connections in the 'instructors' room inside of codefellows can hear this
    socket.in('instructors').emit('grade', `Grade ${payload}`);
  });

});
