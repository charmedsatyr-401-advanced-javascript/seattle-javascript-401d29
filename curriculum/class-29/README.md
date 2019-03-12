![cf](http://i.imgur.com/7v5ASc8.png) Component Composition
============================================

## Learning Objectives

**Students will be able to ...**

* Compose components heirarchically
* Create logical wrapper components
* Create functional wrapper components
* Utilize `children` in composed components
* Compose the `<List>, <If>, <Card>, <Deck>` Components

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**


## UI Concept:
* Cards and Decks - Concept
* Cards and Decks - Layout/SASS

## Main Topic:
Component Composition - Logical

In this setup, you are sending your child components the raw data and allowing them to render the output as they decide.

```javascript

// Dashboard Wrapper
//  - feeds the SearchForm some methods
//  - then feeds the results some data

<Dashboard>
  <SearchForm handler={this.doTheSearch} />
  <Results data={this.state.results} />
</Dashboard>

// .. Results Component
<ul>
  {this.props.data.map( (item,i) => <li key={i}>{item}</li> );
</ul>

```

Component Composition - Using Logicless Children

This is typically used when your `children` are already in JSX form (pre-rendered) and you need to display them as a whole.  A good example might be a gallery of images

```javascript
<Dashboard>
  render() {
    let listings = {this.state.results.map( (item,i) => <li key={i}>{item}</li> );
  }
  <SearchForm handler={this.doTheSearch} />
  <Results>
    { listings.map( listing => listing ) }
  </Results>
</Dashboard>

// Results Component

<ul>
  {this.props.children}
</ul>

```
