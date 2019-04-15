'use strict';

const faker = require('faker');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3333');
const school = io.connect('http://localhost:3333/school');

socket.emit('speak', faker.hacker.phrase());

school.emit('speak', faker.company.catchPhrase());
school.emit('challenge', 'DSA Time!');
