// @flow

import type { UserTypes } from 'types/users';

export type HeaderProps = {
  isAuthenticated: boolean,
  history: Object,
  currentUser: UserTypes,
  onLogout: Function,
  logout: Function,
  showMenu: boolean,
  setShowMenu: Function,
  isMobile: boolean,
  handleShowMenu: Function,
};
