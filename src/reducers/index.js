// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import log from './log';
import auth from './auth';


export default combineReducers({
  routing: routerReducer,
  log,
  auth,
});
