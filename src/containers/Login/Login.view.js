// @flow

import React, { type Element } from 'react';
import { Card } from 'components';
import LoginForm from './Login.form';
import type { LoginProps } from './Login.props';

export default (props: LoginProps): Element<'div'> => (
  <div id={props.id} className="login">
    {props.error && <div>{props.error}</div>}
    <Card>
      <h1 className="login__header"> log in </h1>
      <LoginForm
        onSubmit={props.handleSubmit}
        email={props.email}
        password={props.password}
        setEmail={props.setEmail}
        setPassword={props.setPassword}
      />
    </Card>
  </div>
);
