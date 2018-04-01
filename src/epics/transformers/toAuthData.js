// @flow

import { Auth } from 'types/auths';
import { vector } from 'mori';

const toAuthData: Function = (response: Object): Auth => ({
  user: response.data.user,
  token: response.data.token,
  roles: vector(response.data.roles),
});

export default toAuthData;
