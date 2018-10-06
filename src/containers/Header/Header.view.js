// @flow

import React, { type Element } from 'react';
import { TopNav, MobileNav } from 'src/components';
import type { HeaderProps } from './Header.props';

export default ({
  isMobile,
  handleShowMenu,
  showMenu,
  currentUser,
  isAuthenticated,
  onLogout,
  history,
}: HeaderProps): Element<'header'> => (
  <header className="header">
    {isMobile ? (
      <MobileNav
        setShowMenu={handleShowMenu}
        showMenu={showMenu}
        currentUser={currentUser}
        isLoggedIn={isAuthenticated}
        logout={onLogout}
      />
    ) : (
      <TopNav
        currentUser={currentUser}
        toSignUpPage={() => {
          history.push('/signup');
        }}
        isLoggedIn={isAuthenticated}
        logout={onLogout}
        showMenu={showMenu}
        setShowMenu={handleShowMenu}
      />
    )}
  </header>
);
