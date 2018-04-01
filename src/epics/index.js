// @flow

import { combineEpics } from 'redux-observable';
import auth from './auth';

const epics: Array<Object> = [
  ...auth,
];

export default combineEpics(...epics);
