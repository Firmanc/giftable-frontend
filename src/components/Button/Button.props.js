// @flow
import type { vector } from 'mori';

export type ButtonProps = {
  id: string,
  children?: any,
  onClick: Function;
  classModifiers?: vector<string>,
  type?: string,
  secondary?: boolean,
};
