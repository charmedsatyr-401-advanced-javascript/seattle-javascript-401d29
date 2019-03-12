'use strict';

// First Party Modules
const EventEmitter = require('events');
const net = require('net');

// Third Party Modules
const uuid = require('uuid/v4');

const port = process.env.PORT || 3001;
const server = net.createServer();
const events = new EventEmitter();
const socketPool = {};

/**
 * User Constructor
 * @param socket
 * @constructor
 */
let User = function(socket) {
  let id = uuid();
  this.id = id;
  this.nickname = `User-${id}`;
  this.socket = socket;
};

/**
 * Connection listener.
 * When the user first connects, create a new user instance for them, noting the socket
 * Add them into the pool, by id.  We're using an object for the socket pool here
 * to make any lookups, or write operations O(1) instead of O(n)
 */
server.on('connection', (socket) => {
  let user = new User(socket);
  socketPool[user.id] = user;
  socket.on('data', (buffer) => dispatchAction(user.id, buffer));
});

/**
 * Command Parser
 * Handles commands such as:
 *    @all message
 *    @nick newname
 *    @quit
 *    @kick username
 *    @list
 *    @dm username message
 * @param buffer
 * @returns {*}
 *    format:
 *      command: the @command given
 *      payload: the full text after the @command
 *      target: the first word after the @command (might be useful for @dm, @kick)
 *      message: all of the words after "target" (only useful for @dm)
 */
let parse = (buffer) => {

  let text = buffer.toString().trim();
  if ( !text.startsWith('@') ) { return null; }
  let [command,payload] = text.split(/\s+(.*)/);
  let [target,message] = payload.split(/\s+(.*)/);
  return {command,payload,target,message};

};

/**
 * Dispatcher -- parses the command buffer and then triggers an event with:
 *    command
 *    parsed entry object
 *    and the current user's id
 * @param userId
 * @param buffer
 */
let dispatchAction = (userId, buffer) => {
  let entry = parse(buffer);
  entry && events.emit(entry.command, entry, userId);
};

/**
 * Command Handlers.
 * These respond when events are triggered (emitted) that match their "on" clause
 * This patter rocks ... you can add/remove command support without adding any
 * conditional logic, just listeners
 */

events.on('@all', (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
});

events.on('@nick', (data, userId) => {
  socketPool[userId].nickname = data.target;
});

events.on('@dm', (data, userId) => {
  // data.target == who it's going to
  // data.message == the message
  // find socketPool[target].socket.write(message);
});

server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});
