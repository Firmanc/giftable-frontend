// @flow

import {
  AUTH_SET,
  AUTH_LOGOUT,
} from 'constants/auth';
import { REHYDRATE } from 'constants/persist';
import { Action } from 'types/actions';
import { Auth } from 'types/auths';
import { deepFreeze } from 'utils';

const INITIAL_STATE: Auth = {
  currentUser: {},
  token: '',
};

export default (
  state: Auth = INITIAL_STATE,
  action: Action<Auth>,
): Auth => {
  switch (action.type) {
    case AUTH_SET:
      return deepFreeze(action.payload);
    case AUTH_LOGOUT:
      return INITIAL_STATE;
    case REHYDRATE:
    default:
      return state;
  }
};
