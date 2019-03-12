![CF](http://i.imgur.com/7v5ASc8.png) LAB - Dynamic Forms
=========================================================

## Before you begin
* Fire up your API Server!
  * Get your latest and greatest API server from the your earlier labs and get it running along with a MongoDB instance. (Recommended)
  * Or ... use the supplied server in this lab folder
  * Or ... simply connect to the deployed public API server
    * [https://javascript-401-api.herokuapp.com/api/v1/](https://javascript-401-api.herokuapp.com/api/v1/)...
* Once you have it up and running, fetch the schema for any model that you have. We will be using this to build our forms. Copy the schema response that you get from the server and paste it into a file called "schema.json", we'll be using that later.
  * *The public API supports "players" and "teams" models for all operations*

## Assignments
### Implement the RESTful Reducers
Begin by forking the [forms starter code sandbox](https://codesandbox.io/s/qv3zqp7jmj)

* Use a static .json file to bring in the players schema (you can simply import it)
* Implement all of the restful methods in the Redux Store for the player schema
  * GET - Retrieve one item
  * POST - Create New Item
  * PUT - Replace an item
  * PATCH - Update an item
  * DELETE - Remove an item
* Display a list of every element in the store, updating the list with every action taken on individual items.

### Create a generic `<Record/>` component
In the first phase, you created a form that can edit a single model. In this phase, you will be genericizing that component.

* Rename your editor component to `<Record />`
* It should dynamically load the correct schema json file based on a prop on the component given by the container component.
* Based on the schema
  * Draw the correct form
  * Connect to the right part of the store.
  * Ensure that the record list is from the right part of state
  * Ensure that your REST actions are using the right part of state


### Turn it on!
* Instead of importing .json files, connect the `<Record />` component to an API server to fetch the actual Schema from the API
* This should be optional. Use a flag of some kind to tell your component to read from a local .json file or connect to a server.
* Use a variable to identify the API server so that your application is deployable.

###### Testing
* Test the reducers to make sure that each action is properly manipulating state
* Test the form behavior to ensure that added items are showing in the list, updates are showing real time changes, etc.

##  Documentation
Complete the README.md file included in the lab folder
