# LAB: Access Control (ACL)

## Submission Instructions
  * Move the contents of the api-server folder into the root of this repository so that you can deploy it to Heroku natively.
  * Create your .env file with all valid options
  * Transfer the relevant settings to Heroku ENV
  * Complete the README.md in this folder
    * The server and all documentation must be deployed
    * All of your code must be tested and running through travis

### Overview
Implement Role Based Authentication

#### Feature Tasks -- Server
* Create a new router that contains a few new routes that we can protect using our authentication model.
* Protect your New Routes with the proper permissions based on user capability
  * `router.get('/public-stuff')` should be visible by anyone
  * `router.get('/hidden-stuff')` should require only a valid login
  * `router.get('/something-to-read')` should require the `read` capability
  * `router.post('/create-a-thing)` should require the `create` capability
  * `router.put('/update)` should require the `update` capability
  * `router.patch('/jp)` should require the `update` capability
  * `router.delete('/bye-bye)` should require the `delete` capability
  * `router.get('/everything')` should require the `superuser` capability

* You will need to restrict based on the given permission via middleware
* Implementation of the ACL itself should be completed as a separate model populated virtually (not as a hard-coded table within the User Model as done in the demo)
  * Hint: This might impact the .can() function and how you build out the token
  * You will need to create, allocate, and identify roles and capabilities permissions in a new collection called 'roles' in  your mongoose database

#### Tests
* Add tests to the api routes, asserting restricted access to the routes as shown.
* Add tests to the mongoose model for the created static and instance methods.

###  Documentation
Complete the README.md file included in the lab folder
