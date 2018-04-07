// @flow

import React, { type Element } from 'react';
import { Button, TextInput } from 'components';
import type { LoginFormProps } from './LoginForm.props';

export default (props: LoginFormProps): Element<'form'> => (
  <form
    id="loginForm"
    className="login__form"
    onSubmit={props.onSubmit}
  >
    <TextInput
      id="loginFormEmail"
      type="email"
      placeholder="Email Address"
      value={props.email}
      onChange={props.setEmail}
    />
    <TextInput
      id="loginFormPassword"
      type="password"
      placeholder="Password"
      value={props.password}
      onChange={props.setPassword}
    />
    <Button
      id="loginFormSubmit"
      type="submit"
      onClick={props.onSubmit}
    >
      log in
    </Button>

  </form>
);
