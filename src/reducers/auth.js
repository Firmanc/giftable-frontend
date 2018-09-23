// @flow

import { vector } from 'mori';
import {
  AUTH_SET,
  AUTH_LOGOUT,
} from 'src/constants/auth';
import { REHYDRATE } from 'src/constants/persist';
import { Action } from 'src/types/actions';
import { Auth } from 'src/types/auths';
import { deepFreeze } from 'src/utils';

const INITIAL_STATE: Object = {
  user: {},
  token: '',
  roles: vector(),
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
