// @flow

import { List } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOG_ADD, LOG_REMOVE } from 'src/constants/log';
import { Log } from 'src/models';
import { Action } from 'src/types/actions';
import type { LogRecord } from 'src/types/logs';

const INITIAL_STATE: List<LogRecord> = List();

export default (
  state: List<LogRecord> = INITIAL_STATE,
  action: Action<LogRecord>,
): List<LogRecord> => {
  switch (action.type) {
    case LOG_ADD:
      return state.push(Log(action.payload));
    case LOG_REMOVE:
      return state.filter(
        (log: LogRecord): boolean => log.get('componentId') !== action.payload.get('componentId'),
      );
    case LOCATION_CHANGE:
      return state.isEmpty()
        ? state
        : state.filter((log: LogRecord): boolean => !!log.get('persist'));
    default:
      return state;
  }
};
