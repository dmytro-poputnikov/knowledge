// @ts-nocheck
//ES 12 2021

//replaceALL
const text = "Max wew max asdas max";
console.log(text.replaceAll("max", ""));

//new logical assignment operators

let newText = "";

newText ||= text; // if string is empty "" than output - text variable
console.log(newText);

let newText2 = "";
newText2 ??= text; // output - ""
console.log(newText2);

let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// expected output: 2

b &&= 2;
console.log(b);
// expected output: 0
