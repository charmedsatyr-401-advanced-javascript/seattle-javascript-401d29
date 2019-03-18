# Lab - TCP Chat Server

For this assignment, you will be building a TCP chatroom. Clients should be able to connect to the chatroom through the use of telnet. Clients should also be able to run special commands to exit the chatroom, list all users, reset their nickname, and send direct messages. You may add as many features to this application as you would like. Do not use any third party libraries and testing is *not* required.

## Before you begin
* You'll need to perform an `npm install` in this folder to have jest installed as a dependency.

## Assignment
Refactor the provided application using best practices for modularization, events, test-ability

## Requirements 
Refactor the provided chat server code as follows ...
* Ensure that every function has JSDoc Notation
* Convert to the use of events to trigger actions
* Create a TCP Server using the NodeJS `net` module
* Modularize the parser and socket pool into separately loadable (and test-able) modules
* Modularize the actions into separately loadable (and test-able) modules
  * You can use a node module called 'require-directory' to read those in all at once.
* Create a Client constructor module that models an individual connection 
  * Each client instance should contain (at least) `id`, `nickname`, and `socket` properties
* Clients should be able to send messages to all other clients by sending it to the server
* Clients should be able to run special commands by sending messages that start with a command name which in-turn emit an event that is handled by an action module.
  * `@all` to send a message to all users
  * `@quit` to disconnect
  * `@list` to list all connected users
  * `@nickname <new-name>` to change their nickname
  * `@dm <to-username> <message>` to send a message directly to another user by their nickname
* Connected clients should be maintained in an in-memory collection (array) called the `socketPool`
  * When a socket emits the `close` event, the socket should be removed from the client pool
  * When a socket emits the `error` event, the error should be logged on the server
  * When a socket emits the `data` event, the data should be logged on the server and the commands below should be implemented

### Testing
* Write tests around all of your units
* Test event handlers (not events themselves)
* Use spies to assert that you're calling event handlers 

### Deployment
* Your server need not be deployed to Heroku for this lab. However, installing it remotely will allow it to be publicly tested and played with.

###  Documentation
Complete the README.md file included in the lab folder

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
