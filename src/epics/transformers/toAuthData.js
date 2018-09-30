// @flow

import { List } from 'immutable';
import { Auth } from 'src/types/auths';

const toAuthData: Function = (response: Object): Auth => ({
  user: response.data.user,
  token: response.data.token,
  roles: List(response.data.roles),
});

export default toAuthData;
