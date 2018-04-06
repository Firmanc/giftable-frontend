// @flow

import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import type { TopNavProps } from './TopNav.props';

export default (props: TopNavProps): Element<'nav'> => (
  <nav className="topNav">
    <div className="topNav__leftNav">
      {props.title}
    </div>
    <div className="topNav__rightNav">
      <Link className="topNav__login" to="/login">
        Login
      </Link>
      <Button
        id="navSignupBtn"
        onClick={props.onClick}
        secondary={true}
      >
        Sign Up
      </Button>
    </div>
  </nav>
);
