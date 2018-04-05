// @flow

import React, { type Element } from 'react';
import type { MessageProps } from './Message.props';

const messageActionTypes: Object = {
  LOG_ERROR: 'error',
  LOG_WARNING: 'warning',
  LOG_INFO: 'info',
  LOG_SUCCESS: 'success',
};

const actionTypesGenerator: Function = (type: string): string =>
  messageActionTypes[type] || messageActionTypes.LOG_INFO;

export default (props: MessageProps): ?Element<'div'> =>
  props.log ? (
    <div className={`message message--${actionTypesGenerator(props.log.type)}`}>
      <i className="message__icon" />
      <p className="message__text">{props.log.message}</p>
      <button
        className="message__closeButton"
        onClick={() => {
          props.removeMessage(props.log);
        }}
      >
        <i className="message__closeIcon" />
      </button>
    </div>
  ) : null;
