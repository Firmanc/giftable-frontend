// @flow

import type { UserTypes } from 'types/users';

export type MobileNavProps = {
  setShowMenu: Function,
  showMenu: boolean,
  currentUser: UserTypes,
  isLoggedIn: boolean,
  logout: Function,
};
