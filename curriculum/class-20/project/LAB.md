# Lab - Q Server 

**Project: Build a Multi-Tenant Message Queue Server.**

**Summary:**
 
 A Queue server runs independently, and is tasked with routing events and messaging between clients. 

- Any connected client can "publish" a message into the server.
- Any connected client can "subscribe" to receive messages by type.

The Queue server has the ability to see which clients are connected,  to which Queues they are attached and further, to which events they are subscribed.  The Queue server is tasked with receiving any published message and then distributing it out to all connected and subscribed clients. 

**What is a message?**
 - A message is a package of information, categorized by queue and event
 - `queue` - Which general bucket does this message belong
   - i.e. "Database Events", "Filesystem Events", "Network Events", etc
 - `event` - What event has happened
   - i.e. "delete, add, update, connection lost, error", etc.
 - `payload` - data associated with the event
   - i.e. "record id, record information, error text", etc.
 
 **Use Case**
 - An API server responds to a POST request
   - User's access rights are confirmed
   - The data is analyzed and normalized
   - The data is sent to the database for saving
   - The database "publishes" a message into the queue
     - Queue: DB
     - Event: CREATE
     - Payload: JSON Object containing the created record
   - The API server sends information back to it's client as normal
 - Elsewhere ...
   - A logging application is connected to the queue
     - It has subscribed to the "DB" Queue and is listening for `CREATE` events
     - When the above transaction happens, the logger "hears" the `CREATE` event and logs some details to it's logging database and updates some summary data.
   - A web based 'dashboard' application is running and is connected to the queue
     - It also subscribes to `DB`/`CREATE`
     - When this event happens, it updates a counter in the browser for the operator to see that a new record was created.
   - A monitor application is running and is connected to the queue
     - It also subscribes to `DB`/`CREATE` 
     - When this event happens, it sends a text to all sales people alerting them that a new customer account was created.
   - ... and so on.
   
## Requirements

### Queue Server
* Create a socket.io based queue server
* Multiple Queues, specified through configuration
  * Perhaps a list in a .env file or (eventually) from a DB
* Multiple events supported within each queue, specified through configuration
  * Perhaps a list in a .env file or (eventually) from a DB
* Allow clients to connect to any Valid Queue
  * Return success/error through their connection callback
* Allow clients to subscribe to any valid event
  * Each queue should identify which events it supports
  * Return success/error through their connection callback
* Create a server app
  * Starts the server
  * Creates Queues and Opens Events for subscription
  * Can stop the server
* Create a server class that the app can import
  * Interface should include a way for the app to:
    * Create a new queue
    * Identify which events are valid for the created queue
    * Manage how clients connect/subscribe to the queue and events
    * Broadcast a received message to the correct clients

e.g. Using your server library to start up a server    
```
const Q = require('./lib/server.js');
Q.start();

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('delete');

const network = new Q('network');
network.monitorEvent('attack');
network.monitorEvent('no-service');
```
  
### Queue Subscribers Library

* A node module that any application can import
* Interface:
  * Subscribers
    * Connect to a queue
      * Use a callback to gauge success
    * Subscribe to events in that queue
      * Use a callback to gauge success
      * Provide a function to run when a given event occurs (cb)

e.g. Using your client library to create a client that listens for events in a queue
```
const Q = require('../lib/subscriber.js');

const db = new Q('database');

db.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});

db.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

console.log(db.subscriptions());
```
      
### Queue Publishers Library
* A node module that any application can import
* Interface:
  * Publishers
    * Connect the server's  default namespace
    * Publish an event (by name) with payload to ANY valid queue
    
e.e. Using your publishers libray to publish an event to a queue
```
const Publisher = require('./lib/publisher.js');
const Q = new Publisher();

Q.publish('database', 'delete', {id:77});
Q.publish('database', 'create', {id:99,name:'John'});
Q.publish('network', 'attack', {type: 'DDOS',source:'Russia'});
```

## Hints and Help
Both **rooms** and **namespaces** allow you to inspect the list of clients attached. In building a larger system, it can be advantageous to use these to assist you in managing connections.

* For each 'queue' configured, create a `namespace`
  * Only let clients to connect to these
* For each 'event' that each queue allows, consider that a 'room'
  * When a client 'subscribes' to an event, have them join a room (if it's valid for the queue)
* Assume a published message will contain `queue`, `event`, and `payload`
  * Broadcast `event` and `payload` to each member of the namespace that matches the queue, to all members of the room matching the event name.
  * In this way, managing events and subsribers becomes far easier.


### Resources
* [Message Queues](https://en.wikipedia.org/wiki/Message_queue){:target="_blank"}
* [Queue Servers](http://queues.io/){:targer="_blank"}


### Testing
* Write tests around all of your units
* Test event handlers (not events themselves)

### Stretch Goals / Food for Thought
* Manage queues and events in a database
* Store messages in the database to provide history/reporting
* Handle errors in sending messages (re-send queue?)
* Handle clients re-connecting
* Authentication
  * If a client authenticates
    * Restore previous subscriptions
    * Re-send any un-received messages

### Deployment
* Your server must be deployed to and working on Heroku, with tests passing in Travis.

###  Documentation
Complete the README.md file included in the lab folder

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
