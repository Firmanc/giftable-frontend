// @flow

import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import { Button, ProfileTile } from 'src/components';
import type { TopNavProps } from './TopNav.props';

const UnauthNav: Function = ({
  toSignUpPage,
}: TopNavProps): Element<'nav'> => (
  <nav className="topNav__rightNav">
    <Link className="topNav__link" to="/about">
      About
    </Link>
    <Link className="topNav__link" to="/login">
      Login
    </Link>
    <Button
      id="navSignupBtn"
      onClick={toSignUpPage}
      secondary={true}
    >
      Sign Up
    </Button>
  </nav>
);

const AuthNav: Function = ({
  showMenu,
  setShowMenu,
  currentUser = {},
  logout,
}: TopNavProps): Element<'nav'> => (
  <nav className="topNav__rightNav">
    <Button
      id="createGiftBtn"
      onClick={() => {}}
    >
      Create Gift
    </Button>
    <div
      className={`topNav__avatarWrapper topNav__avatarWrapper--${showMenu
        ? 'showMenu'
        : 'hideMenu'}`}
    >
      <button
        id="openProfileMenuBtn"
        className="topNav__avatar"
        onClick={setShowMenu}
        type="button"
      >
        <img
          className="topNav__avatar__image"
          src={currentUser.profileImage
            ? currentUser.profileImage
            : 'assets/images/default-avatar.png'}
          alt={currentUser.firstName}
        />
        <i className="topNav__avatar__arrow" />
      </button>
      <ProfileTile
        currentUser={currentUser}
        logout={logout}
      />
    </div>
  </nav>
);

const TopNav: Function = ({
  isLoggedIn,
  toSignUpPage,
  showMenu,
  setShowMenu,
  currentUser = {},
  logout,
}: TopNavProps): Element<'div'> => (
  <div className={`topNav topNav--${isLoggedIn
    ? 'auth'
    : 'unauth'}`}
  >
    <nav className="topNav__leftNav">
      <Link className="topNav__link" to="/">
        <img
          className="topNav__logo"
          src="assets/logo.png"
          alt="Giftable"
        />
      </Link>
    </nav>
    {isLoggedIn ? (
      <AuthNav {...{
        showMenu,
        setShowMenu,
        currentUser,
        logout,
      }}
      />
    ) : (<UnauthNav {...{ toSignUpPage }} />)}
  </div>
);

export default TopNav;
