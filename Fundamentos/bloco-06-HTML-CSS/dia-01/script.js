const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const href_link = (e) => {
  e.preventDefault();
};

const input_text = (e) => {
  if (e.key !== "a") {
    alert('só pode digitar "a"');
  }
};

HREF_LINK.addEventListener("click", href_link);
INPUT_CHECKBOX.addEventListener("click", href_link);
INPUT_TEXT.addEventListener("keypress", input_text);
input_text();
href_link();
