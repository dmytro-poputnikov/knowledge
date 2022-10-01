//angular example https://www.damirscorner.com/blog/posts/20211210-GenericBaseComponentsInAngular.html

// The Math.floor() function always rounds down and
//returns the largest integer less than or equal to a given number.

//Get random name
// function getRandom(array: string[]): string {
//   const diceRoll = Math.floor(Math.random() * array.length);
//   return array[diceRoll];
// }

//if we want use string and number:
function getRandom<T>(array: T[]): T {
  const diceRoll = Math.floor(Math.random() * array.length);
  return array[diceRoll];
}

const names = ["Amelia", "Ava", "Eva", "Dima", "Benjamin"];
const randomName = getRandom<string>(names);
console.log(randomName, typeof randomName);

const numbers = [154, 321, 123, 532, 345];
const randomNumber = getRandom<number>(numbers);

console.log(randomNumber, typeof randomNumber);
