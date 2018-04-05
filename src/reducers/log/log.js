// @flow

import { LOG_ADD, LOG_POP } from 'constants/log';
import {
  list,
  rest,
  conj,
} from 'mori';
import { Action } from 'types/actions';
import { Log } from 'types/logs';

const INITIAL_STATE: list<Log> = list();

export default (
  state: list<Log> = INITIAL_STATE,
  action: Action<Log>,
): list<Log> => {
  switch (action.type) {
    case LOG_ADD:
      return conj(state, action.payload);
    case LOG_POP:
      return rest(state);
    default:
      return state;
  }
};
