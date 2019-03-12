# Project - API Server

## Submission Instructions
* Follow the instructions in the "Lab Instructions" documentation in the reference folder of the class repository

### Overview
Implement a fully functional, authenticated and authorized API Server using the latest coding techniques

Over the course of the previous 2 blocks, you have separately created an `auth-server` and an `api-server` 

In this project, the core requirement is to marry those 2 servers to create a single, authenticated API server.

#### Feature Tasks
* API Routes must now be protected with the proper permissions based on user capability
  * `app.get(...)` should should not require authentication
  * `app.post(...)` should require the `create` capability
  * `app.put(...)` should require the `update` capability
  * `app.patch(...)` should require the `update` capability
  * `app.delete(...)` should require the `delete` capability

#### Stretch Goals
* Clean and modularize Auth Middleware
* Clean/Tighten the Auth Model
* Multiple OAuth Providers Support
  * Create an abstraction for the `oauth` route
  
#### Implementation Notes/Advice
* Add the auth module from the `auth-server` to the API server
* Create users and roles in the mongo database

#### Test
* Tests from both previous servers should work in the new merged server...
* 100% Test Coverage Goal For:
  * Auth router
    * Signup
    * Sign In via username/password or Token
  * Model Finder Middleware
  * Auth Middleware
    * Protected Routes
  * OAuth Chooser
  * API Routes
    * Make assertions on the data shapes returned from the API routes

#### Documentation
Write developer documentation to completely document usage of the API Server for developers
* JSDoc for all functions
* Working Swagger for the API

In the README.md write doc for developers ...
* How do I add models?
* How do I add new OAuth Providers?
* How do I identify an OAUth provider
* How do I setup my .env?  How do I set that up remotely?
* What routes are supported?
* How do I call them and what data do they expect?
* What format does data come back?
