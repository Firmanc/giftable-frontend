// @flow

import { connect } from 'react-redux';
import type { Log } from 'src/types/logs';
import logSelectors from 'src/selectors/log';
import { logActions } from 'src/actions';

const mapStateToProps: Function = (): Function => {
  const getLogById: Function = logSelectors.makeGetLogById();

  return (state: Object, ownProps: Object): Object => ({
    log: getLogById(state, ownProps.componentId),
  });
};

const mapDispatchToProps: Function = (dispatch: Function): Object => ({
  removeMessage: (log: Log) => {
    dispatch(logActions.removeLog(log));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
