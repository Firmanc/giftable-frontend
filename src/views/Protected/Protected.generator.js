// @flow

import { connect } from 'react-redux';

const mapStateToProps : Function = (): Function =>
  (state: Object): Object => ({
    isAuthenticated: state.auth.token.length > 0,
  });

export default connect(mapStateToProps, null);
