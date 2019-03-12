![cf](http://i.imgur.com/7v5ASc8.png) Socket.io Client
======================================================

## Learning Objectives

**Students will be able to ...**

* Create and deploy a Socket.io server
* Create and deploy a Socket.io client
* Wire up events and listeners (Pub/Sub) on both ends

## UI Concept:
* Using Hooks to manage state

## Main Topic: Socket.io
* What is Socket.io?
  * Keeps a pipe open between client and server
  * Keeps communication pathway open
  * Responds to events that one side or the other `emits`
  * Publish an Event `socket.emit('run', tellEveryoneToRun)`
  * Respond to an Event `socket.on('run', doTheRunningMan)`
* On the React side, you can respond to an event and add it's payload to state, or use a state change to trigger an `emit`
