// @flow

import React, { type Element } from 'react';
import { classModifiersGen } from 'src/utils';
import type { TextInputProps } from './TextInput.props';

const TextInput: Function = ({
  classModifiers = [],
  label,
  id,
  error,
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  displayError,
}: TextInputProps): Element<'div'> => (
  <div className={`textInput ${classModifiersGen('textInput', classModifiers)}`}>
    {!!label && <label className="textInput__label" htmlFor={id}>{label}</label>}
    <input
      id={id}
      className={`textInput__input textInput__input${error
        ? '--error'
        : '--normal'}`}
      type={type || 'text'}
      value={value}
      onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      }}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
    />
    {(error && displayError) && <p className="textInput__error error">{error}</p>}
  </div>
);

export default TextInput;
