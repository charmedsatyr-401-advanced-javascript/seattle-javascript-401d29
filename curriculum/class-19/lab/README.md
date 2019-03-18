# Lab - Socket.io Namespaces and Rooms

Create a multi-channel, multi-room socket.io server

## Before you begin
Visit / Bookmark the [Running Client Application](https://pmww0ww42q.codesandbox.io/) which you will be testing against.

## Assignment
Develop a server that accepts connections to 2 namespaces: `numbers` and `letters`, each with a room (`negative` and `lowercase`) that can be optionally joined by a client.

Compose an `app.js` that runs an interval and emits specific events to the server periodically, for testing.

We have deployed a front-end application written in React that will connect a socket.io server running at http://localhost:3000 and to the namespaces and rooms specified below.  This application will automatically connect and respond to events and display the data published by your server.

### Requirements 

#### server.js

* Start a server with 2 global variables
  * counter = 0
  * letter = A
* Allow inbound connections on 2 namespaces
  * `/numbers`
  * `/letters`
* Within each namespace, allow users to join an arbitrary room
* For the `numbers` namespace
  * Respond to an event named `next-number`
  * `emit()` an event called `number` with the global counter, increased by 1.
  * For anyone connected to this namespace AND in the `negative` room
    * `emit()` an event called `_number` with the negative value of the global counter
* For the `letters` namespace
  * Respond to an event named `next-letter`
  * `emit()` an event called `letter` with the next letter in the alphabet
  * For anyone connected to this namespace AND in the `lowercase` room
    * `emit()` an event called `_letter` with the lowercase value of the current letter

#### app.js (provided)
* Connects to both the `letter` and `number` namespaces
* Runs an interval and emits the `next-number` and `next-letter` events periodically.

#### client.js (provided)
* This will assist you in testing. Effectively, it does exactly what the website does -- connects to the server and listens for `number` and `letter` events in the right namespaces.
* If you fire up your server, fire up this client, and then run the app.js, you should see numbers and letters flying out.  This is a pretty good indication that the deployed application will also work.

### Testing
* Compose your server in as modular a manner as possible to support testing.
* You will want to extract any 'non-event' functionality 
* Write tests around all of your units
* Test event handlers (not events themselves)

### Deployment
* Your server need not be deployed to Travis for this assignment 

###  Documentation
Complete the README.md file included in the lab folder

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
