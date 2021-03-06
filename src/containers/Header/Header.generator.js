// @flow

import { connect } from 'react-redux';
import { authActions } from 'src/actions';
import authSeletors from 'src/selectors/auth';

const mapStateToProps: Function = (): Function => {
  const checkIsAuthenticated: Function = authSeletors.makeCheckIsAuthenticated();
  const getAuthUser: Function = authSeletors.makeGetAuthUser();

  return (state: Object): Object => ({
    isAuthenticated: checkIsAuthenticated(state),
    currentUser: getAuthUser(state),
  });
};

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  logout: () => {
    dispatch(authActions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
