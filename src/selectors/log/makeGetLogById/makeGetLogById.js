// @flow

import { createSelector } from 'reselect';
import {
  list,
  filter,
  isEmpty,
  first,
} from 'mori';
import { Log } from 'src/types/logs';

const getComponentLog: Function = (state: Object, componentId: string): list<Log> => filter(
  (log: Log): boolean => log.componentId === componentId,
  state.log,
);

export default (): Function => createSelector(
  [getComponentLog],
  (logs: list<Log>): ?list<string> => !isEmpty(logs) && first(logs),
);
