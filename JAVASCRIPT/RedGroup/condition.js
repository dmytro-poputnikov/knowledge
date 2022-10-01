//Condition & ternary operator

function getStatus(age) {
  if (age < 14) return "Children";
  if (age < 20) return "Teenager";
  if (age < 30) return "Adult";

  return "Adult";
}

//Ternary operator
const getStatus2 = (age) => (age < 14 ? "Children" : "Adult");

const getStatus3 = (age) =>
  age < 14 ? "Children" : age < 20 ? "Teenager" : age < 50 ? "Adult" : "Old";
console.log(getStatus3(5));

//Switch

function getStatus4(model) {
  switch (model) {
    case "Mercedes":
    case "Alfa Romeo":
      return "$100 000";
    //if you dont have return, than use break at the end of a case
    case "BMW":
      return "$80 000";
    case "McLaren":
      return "$500 000";
    default:
      return null;
  }
}
