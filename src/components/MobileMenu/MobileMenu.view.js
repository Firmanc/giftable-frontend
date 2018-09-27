// @flow

import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import type { MobileMenuProps } from './MobileMenu.props';

const UnauthNav: Function = ({
  setShowMenu,
}: MobileMenuProps): Element<'div'> => (
  <div className="mobileMenu">
    <header className="mobileMenu__header">
      <div className="mobileMenu__header__closeWrapper">
        <button
          id="closeMobileMenuBtn"
          className="mobileMenu__closeButton"
          onClick={setShowMenu}
          type="button"
        >
          <i className="mobileMenu__closeIcon" />
        </button>
      </div>
    </header>
    <nav className="mobileMenu__nav">
      <Link
        className="mobileMenu__link"
        to="/login"
        onClick={setShowMenu}
      >
        log in
      </Link>
      <Link
        className="mobileMenu__link"
        to="/signup"
        onClick={setShowMenu}
      >
        sign up
      </Link>
      <Link
        className="mobileMenu__link"
        to="/about"
        onClick={setShowMenu}
      >
        about
      </Link>
    </nav>
  </div>
);

const AuthNav: Function = ({
  setShowMenu,
  currentUser,
  logout,
}: MobileMenuProps): Element<'div'> => (
  <div className="mobileMenu">
    <header className="mobileMenu__header">
      <div className="mobileMenu__header__closeWrapper">
        <button
          id="closeMobileMenuBtn"
          className="mobileMenu__closeButton"
          onClick={setShowMenu}
          type="button"
        >
          <i className="mobileMenu__closeIcon" />
        </button>
      </div>
      <div className="mobileMenu__header__profileWrapper">
        <img
          className="mobileMenu__avatar"
          src={currentUser.profileImage
            ? currentUser.profileImage
            : 'assets/images/default-avatar.png'}
          alt={currentUser.firstName}
        />
        <span className="mobileMenu__userDetail">
          <p className="mobileMenu__userDetail__name">
            {currentUser.fullName}
          </p>
          <p className="mobileMenu__userDetail__email">
            {currentUser.email}
          </p>
        </span>
      </div>
    </header>
    <nav className="mobileMenu__authNav">
      <Link
        className="mobileMenu__link"
        to="/"
        onClick={setShowMenu}
      >
        create gift
      </Link>
    </nav>
    <footer className="mobileMenu__footer">
      <button
        className="mobileMenu__logoutButton"
        onClick={logout}
        type="button"
      >
        log out
        <i className="mobileMenu__logoutButton__icon" />
      </button>
    </footer>
  </div>
);

const MobileMenu: Function = (props: MobileMenuProps): Element<any> => {
  const { isLoggedIn }: { isLoggedIn: boolean } = props;

  return isLoggedIn
    ? <AuthNav {...props} />
    : <UnauthNav {...props} />;
};

export default MobileMenu;
