const btn = document.getElementById("btn");

function fnBtn() {
    return function () {
        const btnNext = document.createElement("button");
        btnNext.innerHTML = "I am a next button";
        return document.body.appendChild(btnNext);
  };
}
let nextBtn = fnBtn();
btn.addEventListener("click", nextBtn);