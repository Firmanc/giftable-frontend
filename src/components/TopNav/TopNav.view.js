// @flow

import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import { Button, ProfileTile } from 'components';
import type { TopNavProps } from './TopNav.props';

const UnauthNav: Function = (props: TopNavProps): Element<'nav'> => (
  <nav className="topNav__rightNav">
    <Link className="topNav__link" to="/about">
      About
    </Link>
    <Link className="topNav__link" to="/login">
      Login
    </Link>
    <Button
      id="navSignupBtn"
      onClick={props.toSignUpPage}
      secondary={true}
    >
      Sign Up
    </Button>
  </nav>
);

const AuthNav: Function = (props: TopNavProps): Element<'nav'> => (
  <nav className="topNav__rightNav">
    <Button
      id="createGiftBtn"
      onClick={() => {}}
    >
      Create Gift
    </Button>
    <div
      className={`topNav__avatarWrapper topNav__avatarWrapper--${props.showMenu
        ? 'showMenu'
        : 'hideMenu'}`}
    >
      <button
        id="openProfileMenuBtn"
        className="topNav__avatar"
        onClick={props.setShowMenu}
        type="button"
      >
        <img
          className="topNav__avatar__image"
          src={props.currentUser.profileImage
            ? props.currentUser.profileImage
            : 'assets/images/default-avatar.png'}
          alt={props.currentUser.firstName}
        />
        <i className="topNav__avatar__arrow" />
      </button>
      <ProfileTile
        currentUser={props.currentUser}
        logout={props.logout}
      />
    </div>
  </nav>
);

export default (props: TopNavProps): Element<'div'> => (
  <div className={`topNav topNav--${props.isLoggedIn
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
    {props.isLoggedIn
      ? <AuthNav {...props} />
      : <UnauthNav {...props} />
    }
  </div>
);
