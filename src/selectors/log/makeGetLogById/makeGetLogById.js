// @flow

import { createSelector } from 'reselect';
import type { List } from 'immutable';
import type { LogRecord } from 'src/types/logs';

const getComponentLog: Function = (state: Object, componentId: string): List<LogRecord> => state.log
  .filter(
    (log: LogRecord): boolean => log.get('componentId') === componentId,
  );

export default (): Function => createSelector(
  [getComponentLog],
  (logs: List<LogRecord>): ?LogRecord => logs.first(null),
);
