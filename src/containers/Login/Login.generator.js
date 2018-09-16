// @flow

import { connect } from 'react-redux';
import { authActions } from 'src/actions';
import { Login } from 'src/types/auths';
import { LOGIN_CONTAINER } from 'src/constants/containers';

const mapStateToProps: Function = (): Function => (): Object => ({
  componentId: LOGIN_CONTAINER,
});

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  submitLogin: (data: Login) => {
    dispatch(authActions.login(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
