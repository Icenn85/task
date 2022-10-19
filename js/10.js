const btn = document.getElementById("btn");

function nextBtn() {
  const date = new Date();
  return () => console.log(date);
  };

function fnBtn() {
  const btnNext = document.createElement("button");
  btnNext.innerHTML = "I am a next button";
  document.body.appendChild(btnNext);
  btnNext.addEventListener("click", nextBtn());
}


btn.addEventListener("click", fnBtn);

