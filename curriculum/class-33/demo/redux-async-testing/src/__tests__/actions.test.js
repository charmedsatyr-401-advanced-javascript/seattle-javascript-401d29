/*
  Actions Unit Tests: 
  
  When testing actions, we are testing only that 
  when the action creators (sync and async)
  are dispatched, that the correct action object -- 
  ( type: TYPE, payload: {} ) is returned
*/

import * as actions from "../store/actions.js";

// For Async actions that use superagent ...
// import thunk from "redux-thunk";
// import configureMockStore from "redux-mock-store";
// import superagent from "superagent";

// Mock out the superagent calls with configuration that sends out fake results
// import config from "./api.mock.js";
// const superagentMock = require("superagent-mock")(superagent, config);

// Create a fake store -- we're not going to put anything in it, just test the actions
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// Test that when our synchronous action creators are called, that the right action type is created
describe("Counter Synchronous actions", () => {
  it("should create an action to increment the counter", () => {
    const expectedAction = {
      type: "INCREMENT"
    };
    expect(actions.incrementCounter()).toEqual(expectedAction);
  });

  it("should create an action to decrement the counter", () => {
    const expectedAction = {
      type: "DECREMENT"
    };
    expect(actions.decrementCounter()).toEqual(expectedAction);
  });

  it("should create an action to reset the counter", () => {
    const expectedAction = {
      type: "RESET"
    };
    expect(actions.resetCounter()).toEqual(expectedAction);
  });
});

// Async Actions
// Test that when our async action creators are dispatched, that the right action type is returned

// describe("CMS async actions", () => {
//   afterAll(() => {
//     superagentMock.unset();
//   });

//   it("should create a RECORD  action when fetching record has been done", () => {
//     const store = mockStore();
//     return store
//       .dispatch(actions.getRecord("http://localhost/api/v1/foo/12"))
//       .then(() => {
//         let dispatchedActions = store.getActions();
//         expect(dispatchedActions[0].type).toEqual("RECORD");
//         expect(typeof dispatchedActions[0].payload).toEqual("object");
//       });
//   });
// });
