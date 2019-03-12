'use strict';

const socketPool = require('../lib/socket-pool.js');
const events = require('../lib/events.js');

events.on('@nick', changeNickName);

let changeNickname = (data, userId) => {
  socketPool[userId].nickname = data.target;
};

module.exports = {};
