// @flow

import { combineReducers } from 'redux';
import log from './log';
import auth from './auth';


export default combineReducers({
  log,
  auth,
});
