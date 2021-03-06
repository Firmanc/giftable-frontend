// @flow
import { createSelector } from 'reselect';
import type { UserTypes } from 'src/types/users';

const getAuthUser: Function = (state: Object): UserTypes => state.auth.user;

export default (): Function => createSelector(
  [getAuthUser],
  (user: UserTypes): UserTypes => user,
);
