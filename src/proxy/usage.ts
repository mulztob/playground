import { GenericProxy } from "./types";

//geht nicht... proxies für interne Object schlagen häufig fehl
const x = GenericProxy.of(new Map<string, string>(), {
  get(target, prop) {
    console.log(`I am a proxy getter: ${String(prop)}`);
    return target.get(String(prop));
  },
});
