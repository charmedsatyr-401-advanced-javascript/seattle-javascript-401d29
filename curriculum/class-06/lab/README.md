# LAB: HTTP and REST

## Overview
The goal for this lab is to get your hands dirty in using an API, setting up a simple server that can attach to it and fetch data, and begin the building of a REST client tool that you can use during and after the course.

## Assignments
### JSON API Server
* Implement an API server for a storefront, using json-server
  * Install `json-server` globally
  * Create a new repository called "simple-api"
  * Create a folder called `data` with a `db.json` file
  * Start json-server from within the `simple-api` folder and "watch" your database file
    * `json-server --watch=./data/db.json`
  * Data models should contain the following fields:
    * `categories`
      * `_id`, `name`, `display_name`, `description`
    * `products`
      * `_id`, `category`, `name`, `display_name`, `description`
  * Your api will (should) respond to the following endpoints:
    * `/categories`  GET, POST
    * `/categories/:id/` PUT, DELETE
    * `/products`  GET, POST
    * `/products/:id/` PUT, DELETE
    
### Connect a web server
Implement a Web Server with express and ejs
  * Static routes and assets served from the public folder
  * Use 'ejs' as your 'view engine'
  * Implement your page views as you see fit
  * Implement 2 get routes that will use `superagent` to fetch data from your API
  * /
    * Home Page
        * Lists each category and draws a link to a detail page (/category/:name)
  * /category/:name
    * Lists the products in the category

### Swagger Documentation
  * Within your API, Create a folder called `docs`
  * Write and publish swagger documentation for your API
    * Compose with [Swagger Editor](https://swagger.io/tools/swagger-editor/) 
    
### Stretch Goal
Alter json-server to produce proper standardized API output

* Rather than just an array of objects on a get
  * Return an object with a `count: ##` property and a `results: []` array
* To do this, you'll need a server.js that requires in json-server and which overrides the renderer.  You will find instructions and examples on the json-server github page
* If you hit this goal ...
  * Alter the www server to use the new json format 
  * Alter the swagger docs to reflect the new json format


### Testing
**No automated testing is required for this assignment**

Run your server against someone else's API

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
