// @flow


export default function deepFreeze(obj: Object): Object {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((prop: any) => {
    if (Object.prototype.hasOwnProperty.call(obj, prop)
    && obj[prop] !== null
    && (typeof obj[prop] === 'object' || typeof obj[prop] === 'function')
    && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}
