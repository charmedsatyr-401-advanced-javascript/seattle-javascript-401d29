# LAB: TCP Server / Message Application

Create an event driven messaging server

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

## Getting Started
* `app.js` 
  * Accepts a filename as a command line parameter
  * Reads the file from the file system
  * Converts it's contents to upper case
  * Writes it back to the file system

* `server.js` 
  * Listens for connections on port 3001
  * Broadcasts out every message it hears to all connections

## Requirements

Refactor the provided application (`app.js`) using best practices for modularization, asynchronous file access, and test-ability.

Connect the application (app.js) to the server (server.js) and emit messages related to file access.  Connect a new application (logger.js) to the server and log all file activity.


### Assignment

* Refactor `app.js` to be modular, testable, and clean
  * Read/Write should be done in promises, not callbacks
  * File Reading/Writing/Uppercasing should happen in one module
    * Each operation should be in a separate function
* Alter `app.js` to connect to the running server using TCP
  * On file errors, write an error message to the socket
  * On file save, write a save message to the socket.
* Alter `server.js` to ... 
  * Parse the text it receives
  * Given a good "event" broadcast the event to all connected clients
* Create a new application called `logger.js` ...
  * Connect to the server
  * Listen for "error" and "save" events only
  * On "save", do a `console.log()` with the message
  * On "error" do a `console.error()` with the message
  
### Stretch Goals
* Monitor, Receive only specific events
* Allow for objects/arrays as event data
* Alter the event signature to be more scalable (i.e. replace the string based "event message..." format)
* Create a new client that listens to different events
  * i.e. split out the logger into a separate error handler
  
#### Deployment
Not required for this assignment

### Testing
* Write tests around all of your **units**
* Test event handlers (not events themselves)
* Use spies to help testing your logger methods (assert that console.log was called right)


## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
