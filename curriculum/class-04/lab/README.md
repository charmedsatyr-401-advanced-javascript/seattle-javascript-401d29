# LAB: Buffers - File Transformers

## Submission Instructions
* Follow the core submission instructions

### Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Resources  
* [Buffer Docs](https://nodejs.org/api/buffer.html)

## Assignment 1: Code that writes code ...
* Using only buffers and bit manipulation, generate a file in the `files` folder called `loop.js` that initiates an array with 3 people's names, iterates them with a forEach loop, and console.log's each value.
* You may not use `Buffer.from()` to simply create a buffer `from` chunks of your target code. Rather, you will need to work character by character.
* Verify your work by running `node loop.js` from within the `files` folder and seeing the array items printed out.

## Assignment 2: Create an `<article>`
* Using only buffers and bit manipulation, read the file `pair-programming.txt` from the `files` folder and make the following transformations:
  * Wrap all of the content within `<article>` tags
  * Wrap each section title in an `<h2>`
  * Convert each sentence in each paragraph into a list item.
  * Convert each of the numbered sections in the bottom of the document to `<h3>` tags.
* You may not use .toString()
* Save the file as `pair-programming.html`
* Verify your work by rendering it in a browser

## Testing 
* Test your units (assuming you break down the challenges into small, focused functions.
* Create a target file to use as comparison, so that you have something to assert your work against.

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
