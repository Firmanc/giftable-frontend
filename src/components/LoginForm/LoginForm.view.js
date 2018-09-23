// @flow

import React, { type Element } from 'react';
import { Button, TextInput, Spinner } from 'src/components';
import type { LoginFormProps } from './LoginForm.props';

const LoginForm: Function = ({
  isLoggingIn,
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
}: LoginFormProps): Element<'form'> => (
  <form
    id="loginForm"
    className="login__form"
    onSubmit={onSubmit}
  >
    <TextInput
      id="loginFormEmail"
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={setEmail}
    />
    <TextInput
      id="loginFormPassword"
      type="password"
      placeholder="Password"
      value={password}
      onChange={setPassword}
    />
    <Button
      id="loginFormSubmit"
      type="submit"
      onClick={onSubmit}
    >
      {isLoggingIn ? <Spinner type="threeDots" /> : 'log in'}
    </Button>
  </form>
);

export default LoginForm;
