// @flow

import {
  vector,
  map,
  partial,
  intoArray,
  comp,
} from 'mori';
import { join } from 'ramda';

export default function addClassModifiers(namespace: string, modifiers: vector<string>): string {
  return comp(
    partial(join, ' '),
    intoArray,
    partial(map, (str: string): string => `${namespace}--`.concat(str)),
  )(modifiers);
}
