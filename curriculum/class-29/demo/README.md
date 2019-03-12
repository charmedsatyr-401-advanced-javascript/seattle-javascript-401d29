![CF](http://i.imgur.com/7v5ASc8.png) DEMOS - Routing & Component Composition
===================================================================

[Demo Sandbox](https://codesandbox.io/s/n79l168l40)


## Routing

* Import `BrowserRouter` from `react-router-dom` in the index, and wrap `<App />` with it
  * *explain how this makes routing available to all children*
* Build an app component which brings in a Header, Footer, and Main Component
* In the `<Header />`, add a `<nav />` which draws a list of links, using `<Link to... />` from `react-router-dom`
* In the main, use `<Route exact path="" component="" />` to handle clicks on the nav links to render out components conditionally.
* This is how we build out a Single Page App (SPA)
* Note that MemoryRouter is also an option and explain/show the differences

## Composition

* In your main component, create a few sub-components
* Create an array of items in markup (e.g. map over an array to return a list of `<div>`)
* Render one of your child components with that array.  i.e. `<Stuff>{things}</Stuff>`
* Then in that component, render out `{props.children}`
* Create a simple component called `<If />` that conditionally renders `{props.children}`


