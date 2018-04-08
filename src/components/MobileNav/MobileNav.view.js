// @flow

import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from 'components';
import type { MobileNavProps } from './MobileNav.props';

export default (props: MobileNavProps): Element<'div'> => (
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
        onClick={props.setShowMenu}
      >
        <i className="mobileNav__menuIcon" />
      </button>
    </nav>
    <div className={`mobileNav__mobileMenu mobileNav__mobileMenu--${props.showMenu
      ? 'showMenu'
      : 'hideMenu'}`}
    >
      <MobileMenu
        setShowMenu={props.setShowMenu}
        currentUser={props.currentUser}
        isLoggedIn={props.isLoggedIn}
        logout={props.logout}
      />
    </div>
  </div>
);
