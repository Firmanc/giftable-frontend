// @flow

import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import type { MobileMenuProps } from './MobileMenu.props';

const UnauthNav: Function = (props: MobileMenuProps): Element<div> => (
  <div className="mobileMenu">
    <header className="mobileMenu__header">
      <div className="mobileMenu__header__closeWrapper">
        <button
          id="closeMobileMenuBtn"
          className="mobileMenu__closeButton"
          onClick={props.setShowMenu}
        >
          <i className="mobileMenu__closeIcon" />
        </button>
      </div>
    </header>
    <nav className="mobileMenu__nav">
      <Link
        className="mobileMenu__link"
        to="/login"
        onClick={props.setShowMenu}
      >
        log in
      </Link>
      <Link
        className="mobileMenu__link"
        to="/signup"
        onClick={props.setShowMenu}
      >
        sign up
      </Link>
      <Link
        className="mobileMenu__link"
        to="/about"
        onClick={props.setShowMenu}
      >
        about
      </Link>
    </nav>
  </div>
);

const AuthNav: Function = (props: MobileMenuProps): Element<div> => (
  <div className="mobileMenu">
    <header className="mobileMenu__header">
      <div className="mobileMenu__header__closeWrapper">
        <button
          id="closeMobileMenuBtn"
          className="mobileMenu__closeButton"
          onClick={props.setShowMenu}
        >
          <i className="mobileMenu__closeIcon" />
        </button>
      </div>
      <div className="mobileMenu__header__profileWrapper">
        <img
          className="profileTile__avatar"
          src={props.currentUser.profileImage
            ? props.currentUser.profileImage
            : 'assets/images/default-avatar.png'}
          alt={props.currentUser.firstName}
        />
        <span className="profileTile__userDetail">
          <p className="profileTile__userName">
            {props.currentUser.fullName}
          </p>
          <p className="profileTile__userEmail">
            {props.currentUser.email}
          </p>
        </span>
      </div>
    </header>
  </div>
);

export default (props: MobileMenuProps): Element<any> =>
  props.isLoggedIn
    ? <AuthNav {...props} />
    : <UnauthNav {...props} />;
