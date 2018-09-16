// @flow

import {
  AUTH_SET,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from 'src/constants/auth';
import { Action } from 'src/types/actions';
import { Login, Auth } from 'src/types/auths';

const login: Function = (formData: Login): Action<Login> => ({
  type: AUTH_LOGIN,
  payload: { ...formData },
});

const logout: Function = (): Action<void> => ({
  type: AUTH_LOGOUT,
  payload: undefined,
});

const setAuth: Function = (payload: Auth): Action<Auth> => ({
  type: AUTH_SET,
  payload,
});

export default ({
  login,
  logout,
  setAuth,
});
