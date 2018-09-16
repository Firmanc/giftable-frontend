// @flow

import { LOG_ERROR, LOG_ADD, LOG_REMOVE } from 'src/constants/log';
import { Action } from 'src/types/actions';
import { Log } from 'src/types/logs';

function addErrorLog({
  type = LOG_ERROR,
  message,
  persist,
  componentId,
}: Log): Action<Log> {
  return {
    type: LOG_ADD,
    payload: {
      type,
      message,
      componentId,
      persist,
    },
  };
}

const removeLog: Function = (log: Log): Action<Log> => ({
  type: LOG_REMOVE,
  payload: log,
});

export default ({
  addErrorLog,
  removeLog,
});
