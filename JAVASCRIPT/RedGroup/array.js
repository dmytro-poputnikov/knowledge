//ARRAY
const studentsName = ["Max", "Vlad", "Elena"];

//Get last element ES 2022
console.log(studentsName.slice(-1));

const students = [
  {
    name: "Max",
    age: 18,
  },
  {
    name: "Vlad",
    age: 33,
  },
  {
    name: "Elena",
    age: 44,
  },
];

// console.log(
//   studentsName.map((name, index) => `${index + 1}. ${name}`).join("\n")
// );

//map - with return
//forEach - without return

// console.log(
//   students
//     .filter((student) => student.age > 20)
//     .map((student) => student.name)
//     .join("\n")
// );

//students.push()

//find
console.log(students.find((student) => student.name === "Max"));
