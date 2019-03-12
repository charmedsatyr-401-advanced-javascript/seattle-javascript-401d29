![CF](http://i.imgur.com/7v5ASc8.png) LAB - Remote APIs
======================================================

## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Assignment
### Refactor A Star Wars Lookup App
* Fork [this sandbox](https://codesandbox.io/s/l7n0rwv0ym)
* Convert the current react component state to use a Redux Store
  * Create a store
  * Connect to it, create it, provide from the index
  * Connect to it from the component
  * Create a reducer that holds the state
  * Create actions that update the store after a fetch
  * Alter your fetch to call those actions instead of doing a `setState()`
  * Have a store for holding all people and a store for holding state of 1 person
  * On each fetch, change the contents of the store.
  * Alter the rendering function to use props instead of state
* Break the app into multiple components
  * A wrapper that has the link
  * A lister that shows the people
  * A detailer that shows the person after being clicked on
* Convert the native `fetch...()` calls from being in the components to instead invoking action methods
  * These should return functions that dispatch the real action
  * You'll need to have `thunk` in place to make this work
* Cache the results in the store
  * Once you're all wired up, alter the stores to hold onto state as you fetch things. This way, when you start clicking on people more than once, you don't end up going out to the API to get their data.

### Styling
* Clearly, this needs a little bit of TLC
* Use your generic design to apply core styling and layout
* Use your creativity ...
  * A pop-up modal for the details instead of a simple list?
  * Accordions?
  * Slide Out?
  * Rotator?

### Testing
* tests that ensure the list module functions correctly with error-check parameters

### Stretch Goals:
* Paginate the results.  The initial calls to the people list will give a total number people, pages, and a link to the next page.
* Create a new component for navigation that will use those links to draw a list of pages to fetch, and then keep re-calling that initial fetch method to update the list based on what page you are "on"
* Implement these functional methods as well ...


# ##  Documentation
Complete the README.md file included in the lab folder
