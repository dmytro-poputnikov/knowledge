//DOM

//By ID
//const headingElem = document.getElementById(".heading");
//headingElem.style.backgroundColor = "red";
//By selector
const headingElem2 = document.querySelector("h1");
const headingElem3 = document.querySelector(".heading");
console.log(headingElem2);
headingElem2.style.color = "#f7f7f7";
headingElem2.style.fontSize = "40px";

const bodyElem = document.querySelector("body");
bodyElem.style.backgroundColor = "black";

//InnerHTML

//Wrong
//headingElem2.innerHTML = "<i>ewda</i>";

headingElem2.append("eqew");
