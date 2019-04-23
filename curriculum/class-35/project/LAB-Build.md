# Block 6 Project: CMS

At the core of every web site is content. Given that, the most basic need in the online world is a way to **manage** that content. Typically separate from the presentation (the actual website), most websites have a back-end or administrative interface that allows for the creation, curation, and management of the content that ultimately gets rendered to the user.

In this project, you will be tasked with creating a "CMS" or Content Management System, which will allow users to:

* View a list of all data types (models)
* View a list of all records in each table
* Add a new record to any table
* Delete a record from any table
* Edit or Update existing data records


## Before you begin
Refer to *Getting Started*  in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

## Requirements
* Create an application that will:
  * Give the user a list of all data models
  * When selecting a model, a list of all records
  * When selecting a record, a way to edit or delete the record
  * Add a new record to the model

* Use the tools you've built in react to construct an amazing application.
* Make this easy and intuitive for a user to use
* The User Interface and Experience are completely up to you
  * Suggestion: Make a new dynamic "route" for each model which will present a list of records in a tabular format (react-table, perhaps?)
  * Offer in-place editing, a modal editor, or a detail view


**Implementation Notes/Advice**
* Use the deployed API server at https://javascript-401-api.herokuapp.com
* The api server supports the following routes:
  * **GET** `/api/v1/models` - A list of all data models
  * **GET** `/api/v1/model/schema` - The JSON Schema for a given **model**
  * **GET** `/api/v1/model/id` - A single record, from a **model**, with the **id**
  * **DELETE** `/api/v1/model/id` - Delete a single record, from a **model**, with the **id**
  * **PUT** `/api/v1/model/id` - Replace single record, from a **model**, with the **id**
  * **PATCH** `/api/v1/model/id` - Tactically update a single record, from a **model**, with the **id**

### Testing
* Unit tests for your reducers are required
* Enzyme tests for your interactions are required

## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

* Deploy your front-end (the React application) to AWS
  * Preferably, use the automated deployment process to connect a Cloud Formation stack
* Deploy your back-end (the API server) to Heroku with a mongo database
* Complete the README.md with complete documentation, UML, and user notes.
