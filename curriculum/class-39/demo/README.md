![CF](http://i.imgur.com/7v5ASc8.png) DEMOS - Socket.io Pub/Sub
===================================================

[Demo Sandbox](https://codesandbox.io/s/246mx7mlzn)

## Q Server
* Open up the Q server from Block 4
* Do a quick code review with the students
* Edit the server.js file to setup the database q and appropriate events (just "create" for the demo)
* Launch the server
* Open the logger as well, and start it off (it listens to database events) and prepare to use this a proof of life

## API Server
* Edit the index.js and connect the API server to the Q server, and import the publisher library
* Call it `Q` and make it a global (many files will share)
* Edit a schema file and add a post-save hook and publish a Q event.
* Use Postman or httpie to add a record to the model and witness the logger showing that it happened.

### Publish both the Q and API Servers to Heroku
You will need to make them separate github repositories

## React App
* Open the linked sandbox 
* Incorporate the Q server's `subscriber` library
* Write out a context provider that connects to the Q and listens on events, building up a history in state
* Write out a client that Consumes that context and lists out the events.

This is cool stuff -- 2 separate servers and a separate client all talking to one another.

