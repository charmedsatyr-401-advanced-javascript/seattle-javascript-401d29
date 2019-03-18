# LAB - Authentication


## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files
* You've been provided a server code with the authentication middleware, models and routes scaffolded in. There are some potential bugs and missing logic.
* Work with a partner!

## Assignment
###### Requirements
* Create a UML diagram of the authentication system on a whiteboard
* Document and publish the code with JSDoc 
* **NEW CODE:** Protect the `/book` and `/book/:id` routes by requiring user authentication

###### Testing
* POST to /signup to create a new user
* POST to /signin to login as a user (use basic auth)
* Need tests for auth middleware and the routes
  * Does the middleware function (send it a basic header)
  * Do the routes assert the requirements (signup/signin)
  * Are the book routes protected properly?
* Ensure that you use supergoose instead of mongo/express

### Deployment
* Your server must be deployed to and working on Heroku, with tests passing in Travis.

###  Documentation
Complete the README.md file included in the lab folder

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
