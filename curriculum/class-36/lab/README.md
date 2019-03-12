![CF](http://i.imgur.com/7v5ASc8.png) LAB - Context and Hooks
=============================================================

## Before you begin
* Start with a new react app, created at Code Sandbox or locally with create-react-app

## Implement a Context Provider and Consumer
Create a React application that wraps the entire `<App/>` with a context provider, created using Context API. Then, create multiple components that act as consumers to your context, using it in various ways.

Specifically, build a counter that uses 3 separate components that subscribe to a common provider

### Requirements
* Create a Counter Provider component, which exposes the following state:
  * `count` - A number (default to 0)
  * `increment` - A reference to a function that increases the count
  * `decrement` - A reference to a function that decreases the count
* In the index.js, import CounterContext and wrap `<App />` in it, so that all child components can optionally subscribe to it as consumers.
* Your `<App />` component should simply pull in and render the following child components ...
* Create the following child components that register as a `.Consumer` to the provided context.
  * `<Incrementer />` - Renders a button that, when clicked, calls the `increment()` method in the `Counter Provider`
  * `<Decrementer />` - Renders a button that, when clicked, calls the `decrement()` method in the `Counter Provider`
  * `<Counter />` - Renders the current value of `count` from the Counter Provider
* Provide good styling. Use the css-in-js methodology within the components themselves.

### Testing
* Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
  * Can they see context?
  * Can they interact via published functions?

##  Documentation
Complete the README.md file included in the lab folder
