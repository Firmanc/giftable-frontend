// @flow

import { connect } from 'react-redux';
import { authActions } from 'actions';
import { Login } from 'types/auths';
import { LOGIN_CONTAINER } from 'constants/containers';

const mapStateToProps : Function = (): Function =>
  (): Object => ({
    componentId: LOGIN_CONTAINER,
  });

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  submitLogin: (data: Login, componentId: string) => {
    dispatch(authActions.login(data, componentId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
