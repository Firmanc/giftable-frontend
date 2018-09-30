// @flow

import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from 'src/components';
import type { MobileNavProps } from './MobileNav.props';

const MobileNav: Function = ({
  setShowMenu,
  showMenu,
  currentUser,
  isLoggedIn,
  logout,
}: MobileNavProps): Element<'div'> => (
  <div className="mobileNav">
    <nav className="mobileNav__leftNav">
      <Link className="mobileNav__link" to="/">
        <img
          className="mobileNav__logo"
          src="assets/logo.png"
          alt="Giftable"
        />
      </Link>
    </nav>
    <nav className="mobileNav__rightNav">
      <button
        id="openMobileMenuBtn"
        className="mobileNav__menuButton"
        onClick={setShowMenu}
        type="button"
      >
        <i className="mobileNav__menuIcon" />
      </button>
    </nav>
    <div className={`mobileNav__mobileMenu mobileNav__mobileMenu--${showMenu
      ? 'showMenu'
      : 'hideMenu'}`}
    >
      <MobileMenu {...{
        setShowMenu,
        currentUser,
        isLoggedIn,
        logout,
      }}
      />
    </div>
  </div>
);

export default MobileNav;
