// @flow

import React, { type Element } from 'react';
import { Card, LoginForm } from 'components';
import { Message } from 'containers';
import type { LoginProps } from './Login.props';

export default (props: LoginProps): Element<'div'> => (
  <div id={props.componentId} className="login">
    <Message componentId={props.componentId} />
    <Card>
      <section className="login__formWrapper">
        <h1 className="login__header">log in</h1>
        <LoginForm
          onSubmit={props.handleSubmit}
          email={props.email}
          password={props.password}
          setEmail={props.setEmail}
          setPassword={props.setPassword}
        />
      </section>
    </Card>
  </div>
);
