# LAB - Bearer Authorization

## Before you begin
* You have been provided a server that can handle basic authentication and OAuth in the lab folder.
* You'll need copy the contents of the auth-server folder into a new git repository for this lab, install your dependencies, setup your npm script commands, and pull in your config files
* You've been provided a server code with the authentication middleware, models and routes scaffolded in.
* You will need to create a .env file with:
    * MONGODB_URI
    * PORT
    * SECRET
    * GOOGLE_API_KEY
    * GOOGLE_CLIENT_SECRET

## Assignment
Implement a Bearer Authentication system with optional token expiry, api keys, and single use tokens.

### Requirements

* Install the core bearer authorization system
  * `middleware.js` - Handle the Bearer Header to pull and verify with the token
  * `users-model.js` - Add a bearer authorization method that verifies the token
  
* Improve the core bearer authorization system...
  * Alter the JWT to be time sensitive (valid for 15 minutes)
  * Alter the JWT to be single-use
    * With every authenticated access, re-send a new JWT token as a cookie or header
    * Disable those that you've already authenticated
  
* Create a Auth Key system
  * Create a new route: `router.post('/key' ... )` that will generate a JWT without an expiration date, and noted to be an auth key (so that it won't be deleted like a single use token)
  * Allow users to authenticate using the Auth Key as they would a normal token
  * Auth Keys should never expire
  * Auth Keys should be re-usable

### Testing
* Add test coverage to the auth tests to assert that:
  * given a good token user is able to "log in" and receive a new token
  * Tokens can optionally be expired
  * Expired tokens do not allow a user to login
  * Auth Keys can login a user as a token would
  * Auth Keys do not expire

### Deployment
* Your server must be deployed to and working on Heroku, with tests passing in Travis.

###  Documentation
Complete the README.md file included in the lab folder

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
