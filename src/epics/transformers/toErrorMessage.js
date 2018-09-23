// @flow

const toErrorMessage: Function = (response: ?Object): string => response
  ? response.message
  : 'Connection Error';

export default toErrorMessage;
