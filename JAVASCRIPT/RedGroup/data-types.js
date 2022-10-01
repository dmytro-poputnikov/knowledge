// @ts-nocheck
//Data types

//https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

//LET

let name2 = "Text";
// let is block scoped

let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined

// let can be updated but not re-declared.
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

//However, if the same variable is defined in different scopes, there will be no error:

let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

//CONST
// const declarations are block scoped
// const cannot be updated or re-declared
// Every const declaration, therefore, must be initialized at the time of declaration.

const nameConstant = "Text";
nameConstant = "asd";

// This behavior is somehow different when it comes to objects declared with const.
// While a const object cannot be updated, the properties of this objects can be updated.
// Therefore, if we declare a const object as this:
const greeting = {
  message: "say Hi",
  times: 4,
};

//  while we cannot do this:

greeting = {
  words: "Hello",
  number: "five",
}; // error:  Assignment to constant variable.

// we can do this:

greeting.message = "say Hello instead";

//VAR

//var name = 'Text' - not used

// Problem with var
// There's a weakness that comes with  var. I'll use the example below to explain:

var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"

// So, since times > 3 returns true, greeter is redefined  to "say Hello instead".
// While this is not a problem if you knowingly want greeter to be redefined,
//     it becomes a problem when youdo not realize that a variable greeter
// has already been defined before.

// If you have used greeter in other parts of your code,
// you might be surprised at the output you might get.
// This will likely cause a lot of bugs in your code.
// This is why let and const are necessary.

//Data types
const title = "Title"; //string
const age = 23; //number
const isProgrammer = true; //boolean
const cars = ["BMW", "AUDI", 23]; //array
const person = {
  //object
  name: "Max",
  age: 23,
  isProgrammer: true,
  cars: ["BMS"],
};

const person2 = {
  //object
  title,
  age,
  isProgrammer,
  cars,
};

const rndm = undefined;
const efg = null;

//generic??
