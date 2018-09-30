// @flow

import type { UserTypes } from 'src/types/users';

export type TopNavProps = {
  showMenu: boolean,
  setShowMenu: Function,
  toSignUpPage: Function,
  isLoggedIn: boolean,
  currentUser: UserTypes,
  logout: Function,
};
