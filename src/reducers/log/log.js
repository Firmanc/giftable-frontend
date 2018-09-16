// @flow

import {
  list,
  filter,
  conj,
} from 'mori';
import { LOG_ADD, LOG_REMOVE } from 'src/constants/log';
import { Action } from 'src/types/actions';
import { Log } from 'src/types/logs';

const INITIAL_STATE: list<Log> = list();

export default (
  state: list<Log> = INITIAL_STATE,
  action: Action<Log>,
): list<Log> => {
  switch (action.type) {
    case LOG_ADD:
      return conj(state, action.payload);
    case LOG_REMOVE:
      return filter(
        (log: Log): boolean => log.componentId !== action.payload.componentId,
        state,
      );
    default:
      return state;
  }
};
