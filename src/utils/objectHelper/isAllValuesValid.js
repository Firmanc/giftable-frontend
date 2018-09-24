// @flow

export default function isAllValuesValid(fields: Object): Boolean {
  return Object.keys(fields).every(
    (key: string): Boolean => !!fields[key],
  );
}
