// @flow

export default function isAllValuesValid(fields: Object): boolean {
  return Object.keys(fields).every(
    (key: string): Boolean => !!fields[key],
  );
}
