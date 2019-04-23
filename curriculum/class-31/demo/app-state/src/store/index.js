import { createStore, combineReducers, applyMiddleware } from "redux";

import peopleReducer from "./person-reducer.js";
import cityReducer from "./city-reducer.js";

let reducers = combineReducers({
  person: peopleReducer,
  city: cityReducer
});

export default () => createStore(reducers);
