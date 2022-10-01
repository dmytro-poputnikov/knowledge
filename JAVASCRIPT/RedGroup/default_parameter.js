// @ts-nocheck
//ES7

const getPrice = (name = "Mercedes") => {
  if (name === "Mercedes") return 100000;
  if (name === "Lada") return 10000;
};
console.log(getPrice());
