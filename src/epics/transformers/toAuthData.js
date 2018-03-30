// @flow

import { Auth } from 'types/auths';

const toAuthData: Function = (response: Object): Auth => ({
  currentUser: response.data.user,
  token: response.data.token,
});

export default toAuthData;
