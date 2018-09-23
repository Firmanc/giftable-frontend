// @flow

import { createSelector } from 'reselect';
import {
  type list,
  toJs,
} from 'mori';

const getProgress: Function = (state: Object): list<string> => toJs(state.progress);

export default (actionId: string): Function => createSelector(
  [getProgress],
  (progress: ?Array<string>): boolean => !!progress.find(
    (action: string): boolean => action === actionId,
  ),
);
