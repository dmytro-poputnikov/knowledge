// @ts-nocheck
//Object methods

const person2 = {
  name: "Max",
  age: 23,
  city: "Minsk",
  getName: function () {
    return this.name;
  },
};

const dividend = {
  profit: "$100 000",
};

//Object.assign(person2, dividend);
console.log({ ...person2, ...dividend });
