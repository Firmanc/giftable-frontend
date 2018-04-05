// @flow

import { LOG_ADD, LOG_REMOVE } from 'constants/log';
import {
  list,
  filter,
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
    case LOG_REMOVE:
      return filter(
        (log: Log): boolean =>
          log.componentId !== action.payload.componentId,
        state,
      );
    default:
      return state;
  }
};
