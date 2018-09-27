// @flow

import {
  PROGRESS_SET,
  PROGRESS_DONE,
} from 'src/constants/progress';
import { Action } from 'src/types/actions';
import type { Progress } from 'src/types/progress';

const setProgress: Function = (actionId: string): Action<Progress> => ({
  type: PROGRESS_SET,
  payload: { actionId },
});

const destroyProgress: Function = (actionId: string): Action<Progress> => ({
  type: PROGRESS_DONE,
  payload: { actionId },
});

export default ({
  setProgress,
  destroyProgress,
});
