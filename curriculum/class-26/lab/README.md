![CF](http://i.imgur.com/7v5ASc8.png) LAB - Component Based UI
==============================================================

## Assignment
Create a counter application using React

### Application Requirements
* Visit the Sandbox containing the [Lab Starter Code](https://codesandbox.io/s/06r02vr7w) and FORK it.
* Move the `Header` and `Footer` components to separate files
* Properly `export` them as defaults
* Import them into the `App` Component using ES6 `import` statement
* Convert the `Header` component to an ES6 Class
* Rename the `Main` component to `Counter` and render it properly
* Change the state declaration to track a `counter` instead of `stuff`
* Change the button handler to increment the counter instead of returning a random number.
* Add a second button that, when clicked, would decrement the counter
* Convert the buttons to links


### Design Implementation
* Create a file called `app.scss` and `import` that into the `App` component
* Add some cool styling for the header, making use of SASS nesting
* Alter the `app.scss` as follows:
  * Alter your css rules to use a variable (i.e. $backgroundColor)
  * Start getting creative about styling the basic layout of the app
    * Might things change when the counter is > 0 or < 0?
    * Where would the buttons look best?
    * Can you make the number "pop"

### Submission Instructions
* Upload the completed README.md, with diagram to your Code Sandbox
* Submit a link to your Application running at Code Sandbox
