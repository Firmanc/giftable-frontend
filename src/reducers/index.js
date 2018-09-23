// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import log from './log';
import auth from './auth';
import progress from './progress';

export default combineReducers({
  routing: routerReducer,
  log,
  auth,
  progress,
});
