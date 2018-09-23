// @flow

import {
  list,
  filter,
  conj,
  isEmpty,
} from 'mori';
import { LOCATION_CHANGE } from 'react-router-redux';
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
    case LOCATION_CHANGE:
      return isEmpty(state)
        ? state
        : filter((log: Log): boolean => !!log.persist, state);
    default:
      return state;
  }
};
