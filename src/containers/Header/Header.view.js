// @flow

import React, { type Element } from 'react';
import { TopNav } from 'components';
import type { HeaderProps } from './Header.props';

export default (props: HeaderProps): Element<'header'> => (
  <header className="header">
    <TopNav
      currentUser={props.currentUser}
      toSignUpPage={() => {
        props.history.push('/signup');
      }}
      isLoggedIn={props.isAuthenticated}
      logout={props.onLogout}
      showMenu={props.showMenu}
      setShowMenu={() => {
        props.setShowMenu(!props.showMenu);
      }}
    />
  </header>
);
