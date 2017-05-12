
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './appReducer';
// debugger;

const rootReducer = combineReducers({
  app,
  routing: routerReducer,
});

export default rootReducer;
