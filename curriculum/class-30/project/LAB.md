# Block 5 Project: City Explorer

We currently have a live City Explorer application running on 2 servers. The front end application is currently hosted at Github Pages.

That front end uses some older technologies (jQuery and Handlebars) that we would like to upgrade out of, and into the newest tech ... namely, React!

But we don't want our clients to feel the impact. The look, feel, and functionality needs to remain exactly as it is. We can do a facelift at a later date. Our priority right now is to get this running on React.

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
* Re-Implement the City Explorer Front-End using React
* With the exception the landing page, match the design and behavior of the [current application](https://codefellows.github.io/city_explorer/)
* Keep the CSS exactly the same
* Match the markup with your React components
* Bypass the home page. Rather than ask for an API URL, use the deployed API, located here:
    * https://city-explorer-backend.herokuapp.com
* Accept an input for city, state
* Fetch the location from the API
* Call the API for each service to retrieve the correct data
* Render into each column, the properly formatted results of each service call

## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

* Create a city-explorer repo at github
* Initialize your repo and app by running create-react-app
* Run a local build of your application when complete
* Deploy your /build folder to AWS S3
