//https://medium.com/my-coding-life/extension-method-in-typescript-66d801488589
// To extend Map you must declare you new methods globally
declare global {
  interface Map<K, V> {
    hasValue(value: V): boolean;
    mergeToMap(key: K, value: V): void;
  }
}

// And then you must bind the implementation to the prototype
Map.prototype.hasValue = function <V>(value: V) {
  return [...this.values()].some((v) => v === value);
};

Map.prototype.mergeToMap = function <K, V>(key: K, values: V[]) {
  if (this.has(key)) {
    const oldValues = this.get(key);
    if (Array.isArray(oldValues)) this.set(key, oldValues.concat(values));
    else this.set(key, [oldValues, values]);
  } else {
    this.set(key, values);
  }
};

// And export an empty object
export {};
