// @flow

export type MessageProps = {
  log: {
    message: string;
    type: string;
  },
  componentId: string;
  setShow: Function;
  show: boolean;
};
