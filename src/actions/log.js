// @flow

import { LOG_ERROR, LOG_ADD, LOG_REMOVE } from 'src/constants/log';
import { Action } from 'src/types/actions';
import type { Log, LogReq, LogRecord } from 'src/types/logs';

function addErrorLog({
  type = LOG_ERROR,
  message,
  persist,
  componentId,
}: LogReq): Action<Log> {
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

const removeLog: Function = (log: LogRecord): Action<LogRecord> => ({
  type: LOG_REMOVE,
  payload: log,
});

export default ({
  addErrorLog,
  removeLog,
});
