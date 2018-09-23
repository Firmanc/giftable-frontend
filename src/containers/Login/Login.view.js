// @flow

import React, { type Element } from 'react';
import { Card, LoginForm } from 'src/components';
import { Message } from 'src/containers';
import type { LoginProps } from './Login.props';

export default ({
  componentId,
  handleSubmit,
  email,
  password,
  setEmail,
  setPassword,
  isLoggingIn,
}: LoginProps): Element<'div'> => (
  <div id={componentId} className="login">
    <Message componentId={componentId} />
    <Card>
      <section className="login__formWrapper">
        <h1 className="login__header">log in</h1>
        <LoginForm
          isLoggingIn={isLoggingIn}
          onSubmit={handleSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </section>
    </Card>
  </div>
);
