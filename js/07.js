// 2. Pressing on a button executes operation +, - ,* or / 
// Operation result show in Result input

const btnAdd = document.getElementById("add");
const btnSub = document.getElementById("sub");
const btnMult = document.getElementById("mult");
const btnDiv = document.getElementById("div");
let inputFirst = document.querySelector('input[name="value_1"]');
let inputSec = document.querySelector('input[name="value_2"]');
let result = document.querySelector(".form__result");

// console.log(inputFirst);
// console.log(inputSec);
// console.log(result);
// console.log(btnAdd);
// console.log(btnSub);
// console.log(btnMult);
// console.log(btnDiv);


btnAdd.addEventListener("click",() => onColculate("add"));
btnSub.addEventListener("click", () => onColculate("sub"));
btnMult.addEventListener("click", () => onColculate("mult"));
btnDiv.addEventListener("click", () => onColculate("div"));

function onColculate(oper) {
  switch (oper) {
    case "add":
      result.value = Number(inputFirst.value) + Number(inputSec.value);
      break;
    case "sub":
      result.value = Number(inputFirst.value) - Number(inputSec.value);
      break;
    case "mult":
      result.value = Number(inputFirst.value) * Number(inputSec.value);
      break;
    case "div":
      result.value = Number(inputFirst.value) / Number(inputSec.value);
      break;
  }
}
