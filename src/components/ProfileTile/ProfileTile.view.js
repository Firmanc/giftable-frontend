// @flow

import React, { type Element } from 'react';
import { Card } from 'src/components';
import type { ProfileTileProps } from './ProfileTile.props';

const ProfileTile: Function = ({
  currentUser = {},
  logout,
}: ProfileTileProps): Element<'div'> => (
  <div className="profileTile">
    <Card>
      <div className="profileTile__content">
        <header className="profileTile__header">
          <img
            className="profileTile__avatar"
            src={currentUser.profileImage
              ? currentUser.profileImage
              : 'assets/images/default-avatar.png'}
            alt={currentUser.firstName}
          />
          <span className="profileTile__userDetail">
            <p className="profileTile__userDetail__name">
              {currentUser.fullName}
            </p>
            <p className="profileTile__userDetail__email">
              {currentUser.email}
            </p>
          </span>
        </header>
        <div className="profileTile__menu">
          <button
            className="profileTile__logoutButton"
            onClick={logout}
            type="button"
          >
              Log Out
          </button>
        </div>
      </div>
    </Card>
  </div>
);

export default ProfileTile;
