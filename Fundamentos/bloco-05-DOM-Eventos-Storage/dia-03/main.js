const firstLi = document.getElementById("first-li");
firstLi.addEventListener("click", className);
const secondLi = document.getElementById("second-li");
secondLi.addEventListener("click", className);
const thirdLi = document.getElementById("third-li");
thirdLi.addEventListener("click", className);
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1
// somente o elemento que contém a class 'tech' fica acima

// 2

function className(evento) {
  let xablau = document.querySelector(".tech");
  if (xablau) {
    xablau.classList.remove("tech");
  }
  evento.target.classList.add("tech");
}
// 3
input.addEventListener("input", innerTextChange);
function innerTextChange() {
  let i = document.querySelector(".tech");
  i.innerText = this.value;
}
//4
myWebpage.addEventListener("dblclick", meuPortifolio);
function meuPortifolio() {
  window.location.href = "https://ricardosouza03.github.io/";
}
// 5
myWebpage.addEventListener("mouseover", colorChange);
myWebpage.addEventListener("mouseout", colorChange2);

function colorChange() {
  myWebpage.style.color = "blue";
}
function colorChange2() {
  myWebpage.style.color = "white";
}
//----

function resetText(event) {
  event.target.innerText = "Opção reiniciada";
}

firstLi.addEventListener("dblclick", resetText);
secondLi.addEventListener("dblclick", resetText);
thirdLi.addEventListener("dblclick", resetText);
