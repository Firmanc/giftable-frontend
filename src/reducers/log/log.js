// @flow

import { LOG_ADD, LOG_REMOVE } from 'constants/log';
import {
  set,
  disj,
  conj,
} from 'mori';
import { Action } from 'types/actions';
import { Log } from 'types/logs';

const INITIAL_STATE: set<Log> = set();

export default (
  state: set<Log> = INITIAL_STATE,
  action: Action<Log>,
): set<Log> => {
  switch (action.type) {
    case LOG_ADD:
      return conj(state, action.payload);
    case LOG_REMOVE:
      return disj(state, action.payload);
    default:
      return state;
  }
};
