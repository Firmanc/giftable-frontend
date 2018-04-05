// @flow

import { connect } from 'react-redux';
import { authActions } from 'actions';
import { Login } from 'types/auths';
import { LOGIN_CONTAINER } from 'constants/containers';
import logSelectors from 'selectors/log';

const mapStateToProps : Function = (): Function => {
  const getLogErrorById: Function = logSelectors.makeGetLogErrorById();

  return (state: Object): Object => ({
    componentId: LOGIN_CONTAINER,
    error: getLogErrorById(state, LOGIN_CONTAINER),
  });
};

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  submitLogin: (data: Login, componentId: string) => {
    dispatch(authActions.login(data, componentId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
