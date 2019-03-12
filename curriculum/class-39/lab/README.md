![CF](http://i.imgur.com/7v5ASc8.png) LAB - Socket.io Pub/Sub
=====================================================

## Before you begin
* Ensure that your API server is deployable to Heroku
* Ensure that your Queue server is deployable to Heroku
* You may have a previous deployments out there. Validate
* Open this [Starter Sandbox](https://codesandbox.io/s/z6mpqy858m) and Fork it

## Assignment
For this assignment, you will be creating a database dashboard so that the members of your DBA team can monitor database activity in real time.

Your react application will be conneced to the Q server you build in Block 4. It will connect to the `database` queue and subscribe to `create`, `update`, and `delete` events. For each event, update the UI to indicate the collection that was affected, the event type, the time, and the ID of the record.  You may optionally display additional information.

You should give careful consideration to the visual layout of your application, color choices, animations, and overal usability.

### Notes - Q Server
* Deploy the server to Heroku and validate that you can connect and subscribe to events.
* Listen on `process.env.PORT`
  * Heroku will assign you a port
* Listen on a queue called `database`
* Montior the following events: `create`, `read`, `update`

### Notes - API Server
* Deploy the server to Heroku
* Listen on `process.env.PORT`
  * Heroku will assign you a port
* Alter your API server to connect to the Q server at startup
* Edit your models and make the following changes
  * Add "post" hooks for `save`, `delete` 
  * For each, publish a new event to the Q server
  * Make sure and publish separate events for `create` and `update`, not just `save`
  

### Notes - Connections
* Ensure that you can use `Postman` or `httpie` to hit your server properly.
  * Ensure that all write actions publish the appropriate event and payload into the queue.
  * You can use Postman and your original "logger" client to do this.
  * Once you are confident in the wiring, begin work on the react client.
  
### Testing
* Cover your React application in tests

###  Documentation
Complete the README.md file included in the lab folder
