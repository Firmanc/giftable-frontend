// @flow

const toErrorMessage: Function = (response: ?Object): string => response
  ? response.message
  : 'Server Error';

export default toErrorMessage;
