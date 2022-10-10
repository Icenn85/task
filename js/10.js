const btn = document.getElementById("btn");

function fnBtn() {
  const btnNext = document.createElement("button");
  btnNext.innerHTML = "I am a next button";
    return function () {
        return document.body.appendChild(btnNext);
  };
}
let nextBtn = fnBtn();
btn.addEventListener("click", nextBtn); 