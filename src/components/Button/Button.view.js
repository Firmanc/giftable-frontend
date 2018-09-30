/* eslint-disable react/button-has-type */
// @flow

import React, { type Element } from 'react';
import { classModifiersGen } from 'src/utils';
import type { ButtonProps } from './Button.props';

const typeGenerator: Object = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

export default ({
  id,
  secondary,
  classModifiers = [],
  onClick,
  children,
  type,
}: ButtonProps): Element<'button'> => (
  <button
    id={id}
    type={typeGenerator[type] || typeGenerator.button}
    className={`button button${secondary
      ? '--secondary'
      : '--primary'} ${classModifiersGen('button', classModifiers)}`}
    onClick={onClick}
  >
    {children}
  </button>
);
