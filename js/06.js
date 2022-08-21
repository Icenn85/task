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
  console.log(selectedAnimal);
  
  // const checkedBtn = selectedAnimal.toString();

    switch (selectedAnimal) {
      case "Dog":
        alert("Dog");
        break;
      case "Cat":
        alert("Cat");
        break;
      case "Racoon":
        alert("Racoon");
        break;
      case "Lizard":
        alert("Lizard");
        break;
      case "Snake":
        alert("Snake");
        break;
      default:
        alert("Choose the animal, please!");
    }
  
});