# Block 6 Project: RESTy Conversion to Redux

Its upgrade time! We're going to migrate our verable **RESTy** application from using a simplistic (and slightly monolithic) state management system into a more modern and robust **Redux** core.

**This is a paired assignment**


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
* Keeping the core functionality in place, upgrade RESTy
  * Convert from component state to a Redux Store
  * Convert from using `superagent` to `fetch`
  * Modularize the component and store tree
  * Fully document the application and all components
  * Fully test the reducers, actions, and units

* Use the tools you've built in react to construct an amazing application.
* Make this easy and intuitive for a user to use
* The User Interface and Experience are completely up to you


**Implementation Notes/Advice**
* Use the deployed API server at https://api-401js.herokuapp.com
* The API server has `players` and `teams` models
* The api server supports the following routes:
  * **GET** `/api/v1/models` - A list of all data models
  * **GET** `/api/v1/:model/schema` - The JSON Schema for a given **model**
  * **GET** `/api/v1/:model/id` - A single record, from a **model**, with the **id**
  * **DELETE** `/api/v1/:model/id` - Delete a single record, from a **model**, with the **id**
  * **PUT** `/api/v1/:model/id` - Replace single record, from a **model**, with the **id**
  * **PATCH** `/api/v1/:model/id` - Tactically update a single record, from a **model**, with the **id**


## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

* Deploy your front-end (the React application) to AWS
  * Preferably, use the automated deployment process to connect a Cloud Formation stack
* Deploy your back-end (the API server) to Heroku with a mongo database
* Complete the README.md with complete documentation, UML, and user notes.
