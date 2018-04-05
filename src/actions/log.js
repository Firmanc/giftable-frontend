// @flow

import { LOG_ERROR, LOG_ADD, LOG_REMOVE } from 'constants/log';
import { Action } from 'types/actions';
import { Log } from 'types/logs';

const addErrorLog: Function = (message: string, componentId: string): Action<Log> => ({
  type: LOG_ADD,
  payload: {
    type: LOG_ERROR,
    message,
    componentId,
  },
});

const removeLog: Function = (log: Log): Action<Log> => ({
  type: LOG_REMOVE,
  payload: log,
});

export default ({
  addErrorLog,
  removeLog,
});
