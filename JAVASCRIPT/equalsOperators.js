// @ts-nocheck
// The equality operator(==) checks whether its two operands are equal, returning a Boolean result.
// Unlike the strict equality operator, it attempts to
//!! (==) - convert and compare operands that are of different types.
//!! (===) - only compare operands

console.log(1 == 1);
// expected output: true

console.log("hello" == "hello");
// expected output: true

console.log("1" == 1);
// expected output: true

console.log(0 == false);
// expected output: true

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

//If one of the operands is null or undefined, the other must also be null or undefined to return true.
//Otherwise return false.

// If one of the operands is an object and the other is a primitive,
// convert the object to a primitive using the object's @@toPrimitive()
// (with "default" as hint), valueOf(), and toString() methods, in that order.
// (This primitive conversion is the same as the one used in addition.)

// The most notable difference between this operator and the strict equality(===)
// operator is that the strict equality operator does not attempt type conversion.
// Instead, the strict equality operator always considers operands of different types to be different.
