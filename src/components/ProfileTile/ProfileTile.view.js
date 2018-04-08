// @flow

import React, { type Element } from 'react';
import { Card } from 'components';
import type { ProfileTileProps } from './ProfileTile.props';

export default (props: ProfileTileProps): Element<'div'> => (
  <div className="profileTile">
    <Card>
      <div className="profileTile__content">
        <header className="profileTile__header">
          <img
            className="profileTile__avatar"
            src={props.currentUser.profileImage
              ? props.currentUser.profileImage
              : 'assets/images/default-avatar.png'}
            alt={props.currentUser.firstName}
          />
          <span className="profileTile__userDetail">
            <p className="profileTile__userDetail__name">
              {props.currentUser.fullName}
            </p>
            <p className="profileTile__userDetail__email">
              {props.currentUser.email}
            </p>
          </span>
        </header>
        <div className="profileTile__menu">
          <button
            className="profileTile__logoutButton"
            onClick={props.logout}
          >
              Log Out
          </button>
        </div>
      </div>
    </Card>
  </div>
);
