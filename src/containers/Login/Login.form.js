// @flow

import React, { type Element } from 'react';
import type { LoginFormProps } from './Login.props';

export default (props: LoginFormProps): Element<'form'> => (
  <form className="LoginForm" onSubmit={props.onSubmit}>
    <div className="LoginForm__input">
      <input
        className="loginForm__email"
        type="email"
        value={props.email}
        onChange={props.setEmail}
      />
      <input
        className="loginForm__password"
        type="password"
        value={props.password}
        onChange={props.setPassword}
      />
    </div>
    <div className="LoginForm__submit">
      <button
        className="LoginForm__submitButton"
        type="submit"
        onClick={props.onSubmit}
      >
        login
      </button>
    </div>
  </form>
);
