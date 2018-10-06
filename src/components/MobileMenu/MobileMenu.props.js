// @flow

import type { UserTypes } from 'src/types/users';

export type MobileMenuProps = {
  setShowMenu: Function,
  currentUser: UserTypes,
  logout: Function,
  isLoggedIn: boolean,
};
