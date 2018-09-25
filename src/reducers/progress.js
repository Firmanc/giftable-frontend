// @flow

import { Set } from 'immutable';
import { PROGRESS_SET, PROGRESS_DONE } from 'src/constants/progress';
import { Action } from 'src/types/actions';
import { Progress } from 'src/types/progress';

const INITIAL_STATE: Set<string> = new Set();

export default (
  state: Set<string> = INITIAL_STATE,
  action: Action<Progress>,
): Set<string> => {
  switch (action.type) {
    case PROGRESS_SET:
      return state.add(action.payload.actionId);
    case PROGRESS_DONE:
      return state.delete(action.payload.actionId);
    default:
      return state;
  }
};
