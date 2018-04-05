// @flow

import { connect } from 'react-redux';
import logSelectors from 'selectors/log';

const mapStateToProps : Function = (): Function => {
  const getLogById: Function = logSelectors.makeGetLogById();

  return (state: Object, ownProps: Object): Object => ({
    log: getLogById(state, ownProps.componentId),
  });
};

export default connect(mapStateToProps, null);
