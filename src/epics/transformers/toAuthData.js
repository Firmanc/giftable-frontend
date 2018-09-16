// @flow

import { vector } from 'mori';
import { Auth } from 'src/types/auths';

const toAuthData: Function = (response: Object): Auth => ({
  user: response.data.user,
  token: response.data.token,
  roles: vector(response.data.roles),
});

export default toAuthData;
