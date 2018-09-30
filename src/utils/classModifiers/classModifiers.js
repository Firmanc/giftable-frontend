// @flow

export default function addClassModifiers(namespace: string, modifiers: Array<string>): string {
  const classNames: Array<string> = modifiers.map((modifier: string): string => `${namespace}--${modifier}`);

  return classNames.join(' ');
}
