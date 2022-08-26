// 1. When user press test, show value in alert

const btn = document.querySelector(".form__btn");
const radioButtons = document.querySelectorAll("input");



btn.addEventListener("click", () => {
  let selectedAnimal;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedAnimal = radioButton.value;
      break;
    }
  }

    switch (selectedAnimal) {
      case "dog":
        alert("Dog");
        break;
      case "cat":
        alert("Cat");
        break;
      case "racoon":
        alert("Racoon");
        break;
      case "lizard":
        alert("Lizard");
        break;
      case "snake":
        alert("Snake");
        break;
      default:
        alert("Choose the animal, please!");
    }
  
});