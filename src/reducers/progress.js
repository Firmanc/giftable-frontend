// @flow

import {
  list,
  conj,
  filter,
} from 'mori';
import { PROGRESS_SET, PROGRESS_DONE } from 'src/constants/progress';
import { Action } from 'src/types/actions';
import { Progress } from 'src/types/progress';

const INITIAL_STATE: list<string> = list();

export default (
  state: list<string> = INITIAL_STATE,
  action: Action<Progress>,
): list<string> => {
  switch (action.type) {
    case PROGRESS_SET:
      return conj(state, action.payload.actionId);
    case PROGRESS_DONE:
      return filter(
        (actionId: string): boolean => actionId !== action.payload.actionId,
        state,
      );
    default:
      return state;
  }
};
