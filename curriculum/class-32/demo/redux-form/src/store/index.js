import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'

import reporter from './middleware/reporter.js';
import playersReducer from './players-reducer.js';

let reducers = combineReducers({
  players: playersReducer,
  form: formReducer
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(reporter)));

export default store;