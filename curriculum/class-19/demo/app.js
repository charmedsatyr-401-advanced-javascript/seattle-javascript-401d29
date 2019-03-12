const io = require('socket.io-client');
const faker = require('faker');

const socket = io.connect('http://localhost:3000');

const codefellows = io.connect('http://localhost:3000/codefellows');

setInterval( () => {
  let thing = faker.hacker.noun();
  socket.emit('hi', 'Hello World');
  codefellows.emit('lunch');
  codefellows.emit('homework', thing);
}, 1500);
