// @flow

import React from 'react';
import type { MessageProps } from './Message.props';

const messageActionTypes: Object = {
  LOG_ERROR: 'error',
  LOG_WARNING: 'warning',
  LOG_INFO: 'info',
  LOG_SUCCESS: 'success',
};

const actionTypesGenerator: Function = (type: string): string => messageActionTypes[type]
  || messageActionTypes.LOG_INFO;

export default ({
  log,
  removeMessage,
}: MessageProps): any => !!log && (
  <div className={`message message--${actionTypesGenerator(log.get('type'))}`}>
    <i className="message__icon" />
    <p className="message__text">{log.get('message')}</p>
    <button
      className="message__closeButton"
      type="button"
      onClick={() => { removeMessage(log); }}
    >
      <i className="message__closeIcon" />
    </button>
  </div>
);
