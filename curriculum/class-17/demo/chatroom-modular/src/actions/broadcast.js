'use strict';

const socketPool = require('../lib/socket-pool.js');
const events = require('../lib/events.js');

events.on('@all', (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
});