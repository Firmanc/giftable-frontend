// @flow

import { createSelector } from 'reselect';
import {
  type Set,
} from 'immutable';

const getProgress: Function = (state: Object): Set<string> => state.progress;

export default (actionId: string): Function => createSelector(
  [getProgress],
  (progress: Set<string>): boolean => !!progress.get(actionId),
);
