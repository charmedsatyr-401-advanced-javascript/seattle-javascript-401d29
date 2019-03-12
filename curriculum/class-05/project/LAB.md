# LAB: Buffers - Bitmap Transformer

## Submission Instructions
* Follow the core submission instructions

### Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Resources  
* [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format)
* [Buffer Docs](https://nodejs.org/api/buffer.html)


## Feature Tasks
For this assignment you will be building a bitmap (`.bmp`) transformer CLI. It will read a bitmap in from disk, run one or more color or raster transforms and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data. Your solution should be composed of small tested modules that solve specific problems. Your modules should be thoughfuly named and well documented. The entry point to your CLI should be an index.js file in the root of your package, and all helper modules should be placed in your lib/ directory. Your bitmap transformer modules should not use any third party libraries.

**Assignment 1: Do this will callbacks**

**Assignment 2: Modularize the code**
  * What should be unique, testable modules?
  * What structure should you use to most easily export?
  * How best can we make this scale?

**Stretch Goal - Refactor to use promises**

#### Minimum Requirements
* The CLI should be architected using best modularization practices
* The CLI should require two arguments `input-file-path transfrom-name`
* The CLI should support a minimum of four transforms
* The CLI should log useful Error messages if used incorrectly
* The CLI should log a success message on completion

## Testing 
* Use BDD `describe` and `test` methods to define discriptive tests and increase readablity
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure each function behaves correctly with valid and invalud inputs
* The CLI should be tested without using `child_process` or any equivilant third party librarys

###  Documentation
Complete the README.md file included in the lab folder

Note that there are few places in the starter code (TODO's) that call upon you to reflect on what the code is doing. Please add these notes to your doucmentation as well.

###### Strategy
You will want to define a strategy for solving the problem before you begin to code. Once you have a strategy defined, you can break it into steps that can be split into helper modules. Each helper module should solve a small specific problem. The main module should utilize the helper modules to execute your original stratagy.

1. Gather user input (infile and transform)
1. Read the input bitmap file using the fs module
1. Parse the bitmap's buffer into object represeting a bitmap (using a constructor)
1. Using metadata from the parsed bitmap object run a transform on the buffer directly (mutate the color or raster data)
1. Write the mutated buffer to the output file path

## Starter Code
You've been provided with starter code that implements the basic wiring of the above strategy.
* The index.js file reads the file and creates a bitmap instance that can `parse()` and `transform()`
* The parsing ahas been left to you
* A sample (yet non-functional) transformation has been provided.
* No tests have been written, you'll need to implement those

###### Transfrom Ideas
* Color Pallet Transforms 
  * Invert 
  * Randomize
  * Black and White
  * Darken or Lighten
  * Add or Mutiply a Hue
  * Add or Subtract Contrast
  
* Raster Data Transforms
  * Pixilate
  * Add a border
  * Add a watermark
  * Vertically or Horizontaly Filp
  * Verticaly or Horizontaly Mirror
  * Verticaly or Horizontaly Stretch
