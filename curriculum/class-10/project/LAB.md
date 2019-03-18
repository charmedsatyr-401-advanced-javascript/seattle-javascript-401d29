# Project - Book App v2

## Submission Instructions
  * Follow the instructions in the "Lab Instructions" documentation in the reference folder of the class repository

### Overview
Refactor the Code Fellows 301 Book App

#### Requirements
* The UI and App Functionality must remain identical
* Modularize the server code
  * server.js should be a requireable module
  * index.js should be written to:
    * require mongo and connect to your books database
    * require your server.js and start
  * routes.js should be written to handle routing
  * Middleware moved to appropriate files
  * Model behavior (SQL) moved out into a model file
* Convert the models from postgres to mongo
  * Keep the pg version in addition to the mongo version
  * Must be able to change between them based on config
    * (Model Interface)
* Deploy to Heroku

**STRETCH GOAL**
* Migrate the data
  * Script this so that it can be repeated.

### Testing
* Write a complete set of tests for all data models, independent of the server
* For testing the server and routes, use `supertest` to do end-to-end testing
  * What we're testing is not whether express works, but whether your routes are doing the correct things.
* Your tests must be running green on travis.com

### Deployment
* Your server must be deployed to and working on Heroku, with tests passing in Travis.

###  Documentation
Complete the README.md file included in the lab folder

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
