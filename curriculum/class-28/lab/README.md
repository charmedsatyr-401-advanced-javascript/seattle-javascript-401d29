![CF](http://i.imgur.com/7v5ASc8.png) LAB - Props and State
=================================================


## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Assignment 1 - Props Practice
Fork the [Props Practice Sandbox](https://codesandbox.io/s/9y453m63or)

**Challenge Instructions (Part 1)**

* Complete all tasks in this same index.js file
* Complete the challenge below and submit the URL to your fork
* Create a new component called "Message"
* Render the Message component
* In this componenet, create a state property named "text"
* Set it's value to "Hello World"
* The Message component should render a "div" displaying the contents of the text property from this component's state

**Challenge Instructions (Part 2)**

* Fork your completed sandbox
* Refactor your work using new modules for each component
* Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

* Send multiple properties to the message component
* Create a 3rd component and have the message property render that one, with some props (maybe even the ones that it received)
* Create a 4th component and send props there as well


## Assignment 2 - Internal State Practice
Fork the [Internal State Practice Sandbox](https://codesandbox.io/s/myvyyqvwn9)

**Challenge Instructions (Part 1)**

* Leave these instructions in place
* Fork this sandbox
* Complete all tasks in this same index.js file
* Complete the challenge below and submit the URL to your fork
* Add a constructor and declare a state object
* "state" should have "count" and "name" properties
* Add a form with a single field
* As the user types in the field, change the "name" property in state and update the display
* When the user "submits" the form, increase the counter by 1 and update the display
* The output section below should update as state changes

**Challenge Instructions (Part 2)**

* Fork your completed sandbox
* Refactor your work using new modules for each component
* Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

* Instead of updating the count on submit, create a link that updates the count on demand
* Use multiple fields in your form to update multiple state properties
* Make evaluations on the state of your state to dynamically render things. For example, if the name is empty, show an error or if there are 2 names given (first and last), reverse and comma separate them.

## Assignment 3 - External State Practice
Fork the [External State Practice Sandbox](https://codesandbox.io/s/jn2klxzq3y)

**Challenge Instructions (Part 1)**

* Leave these instructions in place
* Fork this sandbox
* Complete the challenge below and submit the URL to your fork
* Add a constructor and declare a state object
* "state" should have "count" and "name" properties
* Create a "handler" method that will take name as a parameter and updates the state with the given name and an increased count
* Import a new "Form" component (created in the steps below later)
* Render the "Form" component with a reference to the update method created above, via property
* Create a new "Form" Component
* Add a form element with a single field
* As the user types in the field, change the "name" property in state
* When the user "submits" the form invoke handler method in the parent component, sending the updated name
* The output section below should update as state changes

**Challenge Instructions (Part 2)**

* Fork your completed sandbox
* Refactor your work using new modules for each component
* Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

* Instead of updating the count on submit, create a link that updates the count on demand
* Use multiple fields in your form to update multiple state properties
* Make evaluations on the state of your state to dynamically render things. For example, if the name is empty, show an error or if there are 2 names given (first and last), reverse and comma separate them.

##  Documentation
Complete the README.md file included in the lab folder

##  Submission Instructions
Submit links to each of your Sandbox URLs (6 total)
Submit a link to your fork of the lab rep, with an updated README.md. This file should document your work in each of the sandboxes, including a basic UML drawing of each solution.
