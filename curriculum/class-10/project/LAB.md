# Project: Book App v2

Refactor the Code Fellows 301 Book App, migrating it from Postgres(SQL) into Mongo(noSQL) for data storage and modularize the server.

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

## Requirements

### Assignment: Refactor Book App
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
  * Keep the pg version working
  * Model the data in mongo to match and migrate the data
  * Must be able to change between data storage based on config (.env setting)
* Deploy to Heroku

**Software Engineering Notes!** *When you refactor, the heart of the task is to keep things the same (visually and functionally) while completely replacing the underlying implementation*
  
### Testing
* Write a complete set of model and server/route tests using `supergoose`

## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

