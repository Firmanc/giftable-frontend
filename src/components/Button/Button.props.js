// @flow

export type ButtonProps = {
  id: string,
  children?: any,
  onClick: Function;
  classModifiers?: Array<string>,
  type?: string,
  secondary?: boolean,
};
