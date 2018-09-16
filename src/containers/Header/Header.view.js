// @flow

import React, { type Element } from 'react';
import { TopNav, MobileNav } from 'src/components';
import type { HeaderProps } from './Header.props';

export default (props: HeaderProps): Element<'header'> => (
  <header className="header">
    {props.isMobile ? (
      <MobileNav
        setShowMenu={props.handleShowMenu}
        showMenu={props.showMenu}
        currentUser={props.currentUser}
        isLoggedIn={props.isAuthenticated}
        logout={props.onLogout}
      />
    ) : (
      <TopNav
        currentUser={props.currentUser}
        toSignUpPage={() => {
          props.history.push('/signup');
        }}
        isLoggedIn={props.isAuthenticated}
        logout={props.onLogout}
        showMenu={props.showMenu}
        setShowMenu={props.handleShowMenu}
      />
    )}
  </header>
);
