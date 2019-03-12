![cf](http://i.imgur.com/7v5ASc8.png) Demos: Async
==================================================

## Live Coding Demo(s)

### Callbacks  (`demo/async/callbacks.js`)
  * The first demo shows creating a simple callback function and then another function that's called with that callback as a param.  Might be the first time they're ever seeing a function sent as a param, so this might turn into a rabbit hole
  * The second demo shows the error first pattern (and the use of undefined if there's not an error)
  * The final demo shows some asynchronicity. The order of the console.logs proves that out.

### Promises (`demo/async/promises.js`)
  * Demonstrate how `resolve()` and `reject()` feed `.then()` and `.catch()`
  * The second demo is a long string that shows how errors are passed to the first  `.catch()` and then the flow can continue or die.
    * change that demo after you run it to not return in that first catch and watch the chain stop there.
  * The final demos shows off Promise.all()

### Promisify (`demo/async/promisify.js`)
  * Demonstrates how to turn any error first callback into a promise
  * The first demo is done manually to show "how" this works
  * The second one uses the built in node library, which is more robust, to do the same thing
  * Explain that this is for them to sort of bookmark or file away, but they won't really understand why is so cool until after lab...

### Async/Await (`demo/async/async-await.js`)
  * Function must be of type `async`
  * `await` only works in an `async` function
  * The first demo shows a simple example.
    * Demonstrate that you cannot "return" data from an async function  (you get a promise back)
      * But you can treat it like a promise ;)
    * You can operate in the function, and it looks like sync code, which is cool
  * The last example shows how you keep trying until you get a good response. This is far easier with async/await than promises
