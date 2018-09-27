// @flow

import type { LogRecord } from 'src/types/logs';

export type MessageProps = {
  log: LogRecord;
  removeMessage: Function;
};
