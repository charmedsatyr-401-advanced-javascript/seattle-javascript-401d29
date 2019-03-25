# LAB: HTTP and REST

The goal for this lab is to get your hands dirty in using and properly documenting an API

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

## Requirements

### Build a working JSON Server

* Implement an API server suitable for a storefront, using json-server
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
* Document your new api with Swagger
  * Within your API, Create a folder called `docs`
  * Write and publish swagger documentation for your API
  * Compose with [Swagger Editor](https://swagger.io/tools/swagger-editor/)
* Connect a web server
  * Open this [React Application](https://codesandbox.io/s/w638oyk7o8) and "Fork" it
  * Open the .env file and enter the URL to your API Server
  * This server is configured to use the routes noted in the first lab requirement
  * If your lab is working, this app will show your API Data!

### Testing
**No automated testing is required for this assignment**


### Stretch Goal:
* Alter json-server to produce proper standardized API output
  * Rather than just an array of objects on a get
    * Return an object with a `count: ##` property and a `results: []` array
    * To do this, you'll need a server.js that requires in json-server and which overrides the renderer.  You will find instructions and examples on the json-server github page
  * Alter the swagger docs to reflect the new json format
  * Alter the www server to use the new json format

## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
