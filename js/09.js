const btnFirst = document.getElementById("btn-1");
const btnSec = document.getElementById("btn-2");
const btnThird = document.getElementById("btn-3");

let numOne = 0;

btnFirst.addEventListener('click', () => {
    numOne += 1;
    console.log(numOne);
})

function fnBtnSec() {
  let numOne = 0;
  return function () {
    console.log(numOne);
    return numOne += 2;
  };
}
let secBtn = fnBtnSec();
btnSec.addEventListener("click", secBtn);

function fnBtnThird() {
  let numOne = 0;
  return function () {
    console.log(numOne);
    return (numOne += 3);
  };
}
let thirfBtn = fnBtnThird();
btnThird.addEventListener("click", thirfBtn);
