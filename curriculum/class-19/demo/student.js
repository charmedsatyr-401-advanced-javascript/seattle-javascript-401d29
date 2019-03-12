const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('greet', (payload) => {
  console.log('Everyone ... ', payload);
});

const student = io.connect('http://localhost:3000/codefellows');

student.emit('join','students', data => {
  console.log(data);
});

student.on('eat', payload => {
  console.log('All CF ... ', payload);
});

student.on('grade', payload => {
  console.log(payload);
});

