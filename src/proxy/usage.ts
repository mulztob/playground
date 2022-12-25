import { GenericProxy } from "./types";

const x = GenericProxy.of(new Map<string, string>(), {
  get(target, prop) {
    console.log(`I am a proxy getter: ${String(prop)}`);
    return target.get(String(prop));
  },

  apply(target, thisArg, argArray) {
    target.apply(thisArg, argArray);
  },
});
