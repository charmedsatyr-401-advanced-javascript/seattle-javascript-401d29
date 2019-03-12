'use strict';

// How do we test async functions?

describe('callbacks', () => {

  // Callbacks -- pass done in as a param
  // Inside the actual callback, invoke that 'done' as a function
  // to tell jest that your async job is complete.
  // Your 'expect' assertions should be done inside of the callback itself!
  it('can be tested asynchronously', (done) => {
    const myCallback = (err,data) => {
      if(err) {throw new Error(err); }
      setTimeout(
        () => {
          expect(data).toBeTruthy();
          done();
        }, 1500
      );
    };
    
    //  Invoke your function that uses myCallback.
    // See that it does it's assertions within itself.
    someFunctionCall(myCallback);
  });

  // For promises, just 'return' the promis-y thing that you are testing.
  // Your assertions go in your .then() and .catch()
  it('can do a promise', () => {
    return task('john')
      .then(data => {
        expect(data).toEqual({foo:'bar'});
      })
      .catch( err => expect(err).toBeFalsy() );
  });

});