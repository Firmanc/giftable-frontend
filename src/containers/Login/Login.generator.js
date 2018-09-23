// @flow

import { connect } from 'react-redux';
import { authActions } from 'src/actions';
import { Login } from 'src/types/auths';
import progressSelector from 'src/selectors/progress';
import { LOGIN_CONTAINER } from 'src/constants/containers';
import { AUTH_LOGIN } from 'src/constants/auth';

const mapStateToProps: Function = (): Function => {
  const getAuthLoginProgress: Function = progressSelector.makeGetProgressByAction(AUTH_LOGIN);

  return (state: Object): Object => ({
    componentId: LOGIN_CONTAINER,
    isLoggingIn: getAuthLoginProgress(state),
  });
};

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  submitLogin: (data: Login) => {
    dispatch(authActions.login(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
