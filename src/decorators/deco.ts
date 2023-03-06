function logger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  //@ts-ignore
  descriptor.value = function (...args) {
    console.log("params: ", ...args);
    const result = original.call(this, ...args);
    console.log("result: ", result);
    return result;
  };
}

class C {
  @logger
  add(x: number, y: number) {
    return x + y;
  }
}

const c = new C();
c.add(1, 2);
