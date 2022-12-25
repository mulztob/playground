// In order to use you extensions you just need to import them
import "./extensions";

const m = new Map<string, number>([
  ["a", 0],
  ["b", 1],
]);

m.set("c", 15);
console.log(m.hasValue(0));
console.log(m.hasValue(2));

console.log(m);

m.mergeToMap("a", 3);
console.log(m);
