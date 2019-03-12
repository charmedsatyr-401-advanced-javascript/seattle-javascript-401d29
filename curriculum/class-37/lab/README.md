![CF](http://i.imgur.com/7v5ASc8.png) LAB -  `<Login />` and `<Auth />`
=================================================


## Before you begin
* Create a new sandbox from your CMS project's source code
* Reference: [`<Login />` and `<Auth />` implementation](https://codesandbox.io/s/q359203jmq)
  * You'll want to implement this so that you can use the `auth` components in your app.

## Assignment: Implement Login and Authorization into an existing application

### Requirements
* Hide the entire interface until the user has logged in.
* Provide a login and logout option in the main menu
* Implement the following RBAC rules:
    * Logged In Users with 'read' permissions can see the list of data models and records
    * Logged In Users with 'delete' permissions can delete records
    * Logged In Users with 'update' permissions can edit existing records
    * Logged In Users with 'create' permissions can create new records

### Notes
* You may not alter the functionality of the existing application components.
* You may only grant access using RBAC
* The API server supports the following routes:
  * **POST** `/roles` - Accepts a JSON object with `role`, `capabilities` (array) to create a role.
  * **POST** `/signup` - Accepts a JSON object with `username`, `password` to create an account
  * **POST** `/signin` - Signin with either Basic Auth or Bearer Auth, returning a JWT Token
  * **GET** `/api/v1/models` - A list of all data models
  * **GET** `/api/v1/model` - A list of all records in a given **model**
  * **GET** `/api/v1/model/schema` - The JSON Schema for a given **model**
  * **GET** `/api/v1/model/id` - A single record, from a **model**, with the **id**
  * **DELETE** `/api/v1/model/id` - Delete a single record, from a **model**, with the **id**
  * **PUT** `/api/v1/model/id` - Replace single record, from a **model**, with the **id**
  * **PATCH** `/api/v1/model/id` - Tactically update a single record, from a **model**, with the **id**
* The API server has the following user accounts (username:password) that you can use to login as a user with varying permissions
  * admin:ADMIN (create, read, update, delete)
  * editor:EDITOR (create, read, update)
  * user:USER (read)

### Testing
* Write a suite of UI tests that assert the existence of components based on user login state.
* You will need to create some mocking interface to fake a server/login to simulate.


##  Documentation
Complete the README.md file included in the lab folder
