// @flow

import type { vector } from 'mori';
import { RoleType } from './roles';

export interface Login {
  email: string,
  password: string,
}

export interface LoginReq {
  email: string,
  password: string,
  componentId: string,
}


export interface Auth {
  user: Object,
  token: string,
  roles: vector<RoleType>,
}
