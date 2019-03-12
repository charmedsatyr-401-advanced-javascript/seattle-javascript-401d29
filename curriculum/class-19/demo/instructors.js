const io = require('socket.io-client');

const instructor = io.connect('http://localhost:3000/codefellows');

instructor.emit('join','instructors', data => {
  console.log(data);
});

instructor.on('eat', payload => {
  console.log('All CF ... ', payload);
});

instructor.on('grade', payload => {
  console.log(payload);
});

