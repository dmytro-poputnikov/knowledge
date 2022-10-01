// @ts-nocheck
//spread/rest

//SPREAD
const language = {
  name: "PL",
  level: "difficult",
};

const languagePopulation = {
  population: 400000000,
};

const namesFirst = ["Max", "Vlad", "Evgeny"];
const namesSecond = ["Asdasd", "Dasdsa", "Dasdasd"];

console.log({ ...language, ...languagePopulation });

console.log([...namesFirst, ...namesSecond]);
console.log(namesFirst.concat(namesSecond));

//REST
const { name, ...rest } = language;
console.log(name);
console.log(rest);

const [firstName, secondName, lastName] = ["Asdasd", "Dasdsa", "Dasdasd"];
console.log(lastName);

function f(arg1, ...rest) {}
