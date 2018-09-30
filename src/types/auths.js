// @flow

import type { List } from 'immutable';
import { RoleType } from './roles';
import { UserTypes } from './users';

export interface Login {
  email: string,
  password: string,
}

export interface LoginReq {
  email: string,
  password: string,
}

export interface Auth {
  user: UserTypes,
  token: string,
  roles: List<RoleType>,
}
