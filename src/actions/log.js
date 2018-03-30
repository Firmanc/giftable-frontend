// @flow

import { LOG_ERROR, LOG_ADD } from 'constants/log';
import { Action } from 'types/actions';
import { Log } from 'types/logs';

const addErrorLog: Function = (message: string): Action<Log> => ({
  type: LOG_ADD,
  payload: {
    type: LOG_ERROR,
    message,
  },
});

export default ({
  addErrorLog,
});
