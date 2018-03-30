// @flow

import { connect } from 'react-redux';
import { authActions } from 'actions';
import { Login } from 'types/auths';

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  submitLogin: (data: Login) => {
    dispatch(authActions.login(data));
  },
});

export default connect(null, mapDispatchToProps);
