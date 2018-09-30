// @flow

import isEmpty from 'lodash/isEmpty';

export default function addClassModifiers(namespace: string, modifiers: Array<string>): string {
  const classNames: Array<string> = isEmpty(modifiers)
    ? []
    : modifiers.map((modifier: string): string => `${namespace}--${modifier}`);

  return classNames.join(' ');
}
