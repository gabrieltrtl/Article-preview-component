const socialCard = document.querySelector('.container__social'); // Social Hidden Div
const button = document.querySelector('.container__creator .share-icon__wrapper'); // Buttons
const buttonOpen = document.querySelector('.container__social .share-icon__wrapper');

function setVisibility() {
  socialCard.classList.toggle("hidden");
}

button.addEventListener("click", setVisibility);

buttonOpen.addEventListener("click", setVisibility);