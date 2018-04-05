// @flow

export type MessageProps = {
  log: {
    message: string;
    type: string;
  },
  componentId: string;
  setShow: Function;
  removeMessage: Function;
  show: boolean;
};
