// @flow

import React, { type Element } from 'react';
import { classModifiers } from 'utils';
import { vector } from 'mori';
import type { TextInputProps } from './TextInput.props';

export default (props: TextInputProps): Element<'div'> => (
  <div className={`textInput ${classModifiers(
    'textInput',
    props.classModifiers || vector(),
    )}`}
  >
    {props.label
      && <label className="textInput__label" htmlFor={props.id}>{props.label}</label>}
    <input
      id={props.id}
      className={`textInput__input textInput__input${props.error
        ? '--error'
        : '--normal'}`}
      type={props.type || 'text'}
      value={props.value}
      onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
      }}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      placeholder={props.placeholder}
    />
    {(props.error && props.displayError)
      && <p className="textInput__error error">{props.error}</p>}
  </div>
);
