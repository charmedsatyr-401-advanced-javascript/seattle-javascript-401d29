![CF](http://i.imgur.com/7v5ASc8.png) DEMOS - Remote APIs
=========================================================


### [async demo](https://codesandbox.io/s/lrm3727z3l)
This is a simple demo that pulls in some data from an API.
* Demonstrate first with some stubbed data in the reducer to get it all wired up.
  * Talking point: start your UI with stub/mock data so you can get work done
* Add in a remote call using normal react events and function
  * Talking point: works, but is outside of the Redux ecosystem. What if some other component needs this data?
* Try and wire it up with an action that runs the superagent call
  * You will get a big error from React/Redux
  * Explain that this is because action generators must return an object
* Code out thunk as middleware and explain what it's doing
* Code out an action generator that returns a function that returns the dispatch of the actual action
* Re-Run the code to prove it works
* Replace our skinny thunk with the real one and show that it still works.

