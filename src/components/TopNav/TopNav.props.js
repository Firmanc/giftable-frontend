// @flow

import type { UserTypes } from 'types/users';

export type TopNavProps = {
  showMenu: boolean,
  setShowMenu: Function,
  toSignUpPage: Function,
  isLoggedIn: boolean,
  currentUser: UserTypes,
  logout: Function,
};
