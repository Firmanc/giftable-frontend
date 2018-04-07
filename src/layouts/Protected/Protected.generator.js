// @flow

import { connect } from 'react-redux';
import authSeletors from 'selectors/auth';

const mapStateToProps : Function = (): Function => {
  const checkIsAuthenticated: Function = authSeletors.makeCheckIsAuthenticated();

  return (state: Object): Object => ({
    isAuthenticated: checkIsAuthenticated(state),
  });
};

export default connect(mapStateToProps, null);
