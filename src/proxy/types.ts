export class GenericProxy<T> {
  public static of<T extends object>(realObject: T, handler: ProxyHandler<T>) {
    return new Proxy(realObject, handler);
  }
}

type MapHandler<K, V> = ProxyHandler<Map<K, V>>;

const handler: MapHandler<string, string> = {
  get(target, prop) {
    return target.get(String(prop));
  },
};
