// @flow

import React, { type Element } from 'react';
import LoginForm from './Login.form';
import type { LoginProps } from './Login.props';

export default (props: LoginProps): Element<'div'> => (
  <div className="login">
    <LoginForm
      onSubmit={props.handleSubmit}
      email={props.email}
      password={props.password}
      setEmail={(event: SyntheticInputEvent<HTMLInputElement>) => {
        props.setEmail(event.target.value);
      }}
      setPassword={(event: SyntheticInputEvent<HTMLInputElement>) => {
        props.setPassword(event.target.value);
      }}
    />
  </div>
);
