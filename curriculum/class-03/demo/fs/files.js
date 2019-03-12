'use strict';

let fs = require('fs');

let file = `${__dirname}/data.txt`;

// Reading file contents synchronously.
// this is a BLOCKING operation (it lives in the call stack until it finishes), therefore not recommended for use.
// It will read a file's contents and return a buffer
let data = fs.readFileSync(file);
console.log(data.toString());



// Asynchronously reading a file.
// Note the ERROR FIRST callback, allowing us to handle error conditions coming back the fs.readFile method.
fs.readFile(file, (err,data) => {
  if ( err ) { throw err; }
  console.log(data);
});

// This is the same as the above, but a little bit cleaner.
// We create a callback function, and then send it in by name rather than inline.
// Same functionality, it just reads better.

let doSomethingWithTheContentsOfTheFile = (err,data) => {
  if (err) {
    throw err;
  }
  console.log(data);
};

fs.readFile(file, doSomethingWithTheContentsOfTheFile);

