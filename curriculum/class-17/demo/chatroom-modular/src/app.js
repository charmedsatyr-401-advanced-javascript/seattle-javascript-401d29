'use strict';

// First Party Modules
const net = require('net');

// Local Modules
const User = require('./models/user.js');
const socketPool = require('./lib/socket-pool.js');
const events = require('./lib/events.js');

let requireDir = require('require-dir');
requireDir('./actions/');

const port = process.env.PORT || 3001;
const server = net.createServer();

/**
 * Connection listener.
 * When the user first connects, create a new user instance for them, noting the socket
 * Add them into the pool, by id.  We're using an object for the socket pool here
 * to make any lookups, or write operations O(1) instead of O(n)
 */
server.on('connection', handleConnection);

let handleConnection = (socket) => {
  let user = new User(socket);
  socketPool[user.id] = user;
  socket.on('data', (buffer) => dispatchAction(user.id, buffer));
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

let startServer = () => {
  server.listen(port, () => {
    console.log(`Chat Server up on ${port}`);
  });
};

module.exports = {startServer};
