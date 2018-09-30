// @flow

import type { RecordOf } from 'immutable';

export type Log = {
  message: string,
  type: ?string,
  componentId: string,
  persist: boolean,
}

export type LogRecord = RecordOf<Log>;

export interface LogReq {
  message: string,
  type?: string,
  componentId: string,
  persist: boolean,
}
