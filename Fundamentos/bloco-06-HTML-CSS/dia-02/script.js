const button = document.querySelector("#button");

const interruptButton = (e) => {
  e.preventDefault();
};

button.addEventListener("click", interruptButton);
