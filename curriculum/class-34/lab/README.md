![CF](http://i.imgur.com/7v5ASc8.png) LAB - Remote CRUD
=======================================================


## Before you begin
Fork [this sandbox](https://codesandbox.io/s/n7552v6jpl)

Fire up your API Server locally or connect your app to our remote API
* https://javascript-401-api.herokuapp.com

## Assignment
Conver the forms lab into using remote APIs to source the schema and save the record data

### Requirements
* Remove the code that requires the `.json` file in  your react app for the schema and adds it to state
* Pull the schema from the remote server via the resource path `/api/v1/players/schema` (or whichever model you choose)
* On your first pull from the server of the database records, save them in the store for faster retrieval
* Instead of saving straight to the Redux Store, use an async action creator function to send data to the server (using post or put) and then update the local store
* When rendering the forms and lists, use the store as a cache, and update it after you save to the server.

### Testing
* tests that ensure the list module functions correctly with error-check parameters

### Stretch Goals:
* Style it!

###  Documentation
Complete the README.md file included in the lab folder
