// @flow
import { vector } from 'mori';
import classModifiers from './classModifiers';

describe('AddClassModifiers.spec', () => {
  test('Adds modifiers to namespace', () => {
    const expected: string = 'name--mod1 name--mod2';

    const actual: string = classModifiers('name', vector('mod1', 'mod2'));

    expect(actual).toBe(expected);
  });

  test('does return anything if vector is empty', () => {
    const expected: string = '';

    const actual: string = classModifiers('name', vector());

    expect(actual).toBe(expected);
  });
});
