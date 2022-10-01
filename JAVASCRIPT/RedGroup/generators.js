// The Generator object is returned by a generator
// function and it conforms to both the iterable protocol and the iterator protocol.
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};

// yield
// The yield keyword is used to pause and resume a generator function.

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// expected output: "abc"

const gen = foo(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
