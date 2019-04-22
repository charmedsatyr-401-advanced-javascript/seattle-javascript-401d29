# Block 6 Project: CMS

## Overview
At the core of every web site is content. Given that, the most basic need in the online world is a way to **manage** that content. Typically separate from the presentation (the actual website), most websites have a back-end or administrative interface that allows for the creation, curation, and management of the content that ultimately gets rendered to the user.

In this project, you will be tasked with implementing a "CMS" or Content Management System, which will allow users to:

* Give the user a list of all data models
* When selecting a model, a list of all records
* When selecting a record, a way to edit or delete the record
* Add a new record to the model

## Requirements
* Fork the repository, unzip, and install the react application on your local environment
* Develop and test locally instead of at Code Sandbox
  * You will need to rename the `env` file to `.env` 
  * Add a `.gitignore` file so you don't check-in your node modules.
  * Remove .env from your .gitignore. AWS will need this do your build properly
* Fix the application (it's got a few bugs for you to trace down before it will work properly)
* Document, with JSDoc every method in the components as well as the actions and reducers
* Draw on a whiteboard a complete UML diagram for the code
* Draw on a whiteboard a data-flow diagram for each user workflow (list models, list records, etc)
* Write tests to assert that things are working as expected
* Apply some styling!
  * Make this easy and intuitive for a user to use
  * The User Interface and Experience are completely up to you

## Notes
* This CMS uses a deployed API server located at https://javascript-401-api.herokuapp.com
* The api server supports the following routes:
  * **GET** `/api/v1/models` - A list of all data models
  * **GET** `/api/v1/model` - A list of all records in a given **model**
  * **GET** `/api/v1/model/schema` - The JSON Schema for a given **model**
  * **GET** `/api/v1/model/id` - A single record, from a **model**, with the **id**
  * **DELETE** `/api/v1/model/id` - Delete a single record, from a **model**, with the **id**
  * **PUT** `/api/v1/model/id` - Replace single record, from a **model**, with the **id**
  * **PATCH** `/api/v1/model/id` - Tactically update a single record, from a **model**, with the **id**

## Submission Instructions
* Deploy your front-end (the React application) to AWS
  * Preferably, use the automated deployment process to connect a Cloud Formation stack
* Complete the README.md with complete documentation, UML, and user notes.

## Strech Goals!
This application started out as a monolithic, standard React App. Take a look at the [Original React CMS](https://codesandbox.io/s/72qwmw6qnx) and create an image and notes that map out the original application was transformed into the Redux version that you worked on for this lab.
