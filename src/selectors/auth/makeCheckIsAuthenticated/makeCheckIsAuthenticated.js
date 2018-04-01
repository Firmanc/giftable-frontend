// @flow
import { createSelector } from 'reselect';

const getToken: Function = (state: Object): string => state.auth.token;

export default (): Function => createSelector(
  [getToken],
  (token: string): boolean => token.length > 0,
);
