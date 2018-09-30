// @flow

import { Record, type RecordFactory } from 'immutable';
import type { Log } from 'src/types/logs';

const LogRecord: RecordFactory<Log> = Record({
  type: '',
  message: '',
  componentId: '',
  persist: false,
});

export default LogRecord;
