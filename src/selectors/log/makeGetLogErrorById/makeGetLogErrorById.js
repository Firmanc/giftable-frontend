// @flow

import { createSelector } from 'reselect';
import { list, filter, isEmpty, first } from 'mori';
import { Log } from 'types/logs';
import { LOG_ERROR } from 'constants/log';

const getComponentLog: Function = (state: Object, componentId: string): list<Log> =>
  filter(
    (log: Log): boolean => log.componentId === componentId
      && log.type === LOG_ERROR,
    state.log,
  );

export default (): Function => createSelector(
  [getComponentLog],
  (logs: list<Log>): ?list<string> => !isEmpty(logs) && first(logs).message,
);
