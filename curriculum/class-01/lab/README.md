# LAB: Node Ecosystem

## Implementation
* Setup the package.json file to run lint checks and tests against the greet and arithmetic modules
* Create a file called `index.js` that requires both the greet and arithmetic modules.
* Use this file to "greet" and perform math operations using the imported functions from the 2 modules
* `console.log()` the return values

### Arithmetic Module

#### Write Arithmetic Module Tests
* Use the faker module to randomize input
* Test each method for proper use (invoked with number arguments)
* Test each method for improper use (invoked with one or more non-number arguments)

#### Add features to the arithmetic module
* Add support for multiply and divide (be careful to not divide by zero!)
* Refactor the add, subtract, multiply to allow for an array of params so that you can do deeper calculations

#### Refactor the arithmetic module
* DRY the code by externalizing any type checking or argument validation from your methods

---


### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

#### Greet Module Tests
* Use the faker module to randomize input
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument


### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
