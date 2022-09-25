//Functions

//function has context (this)
//to get variable outside the function use bind
function getName() {
  const name = "erwg";
  return this.name;
}

//arrow function
//dont have context. THIS - outside of arrow function
const getChannelName = () => {
  return "RED Group";
};

const getChannelName2 = () => "Red Group2";

console.log(getChannelName2());

//Arguments
//if you have more than 2,3 arg than create object

const getPrice = (name, lastName, model) => {
  if (name === "Mercedes") return 100000;
  if (name === "Lada") return 10000;
  return null;
};
