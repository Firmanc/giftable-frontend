// @flow

import React, { type Element } from 'react';
import { classModifiers } from 'utils';
import type { ButtonProps } from './Button.props';

export default (props: ButtonProps): Element<'button'> => (
  <button
    id={props.id}
    type={props.type || 'button'}
    className={`button button${props.secondary
      ? '--secondary'
      : '--primary'} ${classModifiers('button', props.classModifiers)}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
