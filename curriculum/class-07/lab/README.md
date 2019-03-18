# LAB: Express 

## Assignments
**This is a paired Lab**

### Middleware and Routing Practice
* Create a repository called `lab-07-middleware` and copy the contents of the `starter-code/middleware` folder into it.
* Complete the following tasks in the `server.js` file
  * Write error handling middleware
  * Write not found middleware and a catch-all route that uses it.
  * Write middleware that runs on every route that adds a property called `requestTime` with a value of the current Date/Time to the request object.
  * Write middleware that runs on every route that will run a `console.log()` containing the **method**, **path**, and the new property `requestTime` from the request 
  * Write middleware that runs only on the `/c` route that performs an additional `console.log()` with a randomly generated number
  * Write middleware that runs on the `/d` route that raises an error using `next`
  * Write middleware that runs on the and `/b` route that takes a number as a parameter, squares it, and and sets that value on the request object in a property called `number`.  
    * Alter the `/b` route to `.send()` that number from the request object to the browser.
* Ensure that all of your routes and middleware work as expected
* Create a router in a separate file called `routes.js`
  * Move the `/c` and `/d` routes into it
  * Export it
  * Import it into the server file and properly `use()` it.
  
### Testing Practice
* Create a repository called `lab-07-testing` and copy the contents of the `starter-code/testing` folder into it.
* Complete the following tasks
  * Convert the server.js from an app into a module
  * Create an index.js file that imports the server and starts it
  * Start the server and manually your routes (/a should work, /e should error, anything else should 404)
  * Stop the server and complete the tests.
    * Make note of how things are wired and provide answers to the embedded questions
 

### API Server
* Create a repository called `lab-07-api-server` and copy the contents of the `starter-code/api-server` folder into it.
* Complete the server's CRUD functionality
  * Implement DELETE
  * Implement PUT
* Implement data integrity checking
  * Create a constructor that all input for new and updated records (POST and PUT) can be run through.
  * This constructor should return a properly formatted and validated object (type checked, and required fields)
  * Only with a good object, should a write operation be allowed to occur
* Add support for a second model (with it's own routes and "database")


#### API Server Documentation
* Swagger Docs
  * Document all routes and methods for all models
  * You can start with the swagger docs from the previous lab
  * Place the swagger.json files in the `doc` folder
  * Implement the `/api/v1/MODEL/doc` route for each of your models
* JSDoc
  * Document all of your functions
  * Export your documentation in a `doc` folder
  * Ideally, your swagger docs from the previous lab should still work!
  * The difference is that this is a custom API server instead of the simpler 'json-server'

#### API Server Testing
* Create as many "units" as you can to test functions and the data model as you normally do.
* For testing the server and routes, use `supertest` to do end-to-end testing
  * What we're testing is not whether express works, but whether your routes are doing the correct things.
* Your tests must be running green on travis.com

### Deployment
* All 3 servers must be deployed to and working on Heroku, with tests passing in Travis for the testing practice and api servers.

### STRETCH GOAL: API Server Modularity
* Modularize the server. Currently all of the code lives in the `lib/server.js` file.
  * Create a 404 (not found) handler middleware as a module in `lib/middleware`
  * Create a 500 (error) handler middleware as a module in `lib/middleware`
  * Create a models folder with a file for the data model
    * Incorporate your data integrity checking code
    * The data model should manage the data (in-memory) and expose crud methods 
      * GET, POST, PUT, DELETE
      * Each should return the correct data to the server 
      * The server should adapt/format the data as a proper response to the client
    * If you have 2 data models, how might you handle this?


### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
