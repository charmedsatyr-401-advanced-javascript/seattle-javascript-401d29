'use strict';

let util = require('util');

let someFunction = function(word, cb) {
  cb(null, word);
};

someFunction('foo', (err, data) => {
  if(err) { return err; }
  else { console.log('cb style', data); }
});

let promisify = (fn) => (...args) => {
  return new Promise( (resolve, reject) => {
    fn(...args, (err, data) => {
      if ( err ) { reject(err); }
      else { resolve(data); }
    });
  });
};

let customPromisedWay = promisify(someFunction);
customPromisedWay('bar')
  .then(data => console.log('Custom Promisify Returns:', data))
  .catch(console.error);


// Node gives us a built-in way to do that, which is more performant
let utilPromisedWay = util.promisify(someFunction);
utilPromisedWay('bar')
  .then(data => console.log('Util Promisify Returns: ', data))
  .catch(console.error);



