let backgroundColor = document.querySelector("#backgroundColor");
let textColor = document.querySelector("#textColor");
let fontSize = document.querySelector("#fontSize");
let changeFont = document.querySelector("#changeFont");
let text = document.querySelector("#text");
let body = document.querySelector("#body");
let texto = document.querySelector("#texto");
let font = document.querySelector("#font");

backgroundColor.addEventListener("click", changeBackGround);
textColor.addEventListener("click", changeTextColor);
fontSize.addEventListener("click", changeFontSize);
changeFont.addEventListener("click", changeFontFamily);

function changeBackGround() {
  if (body.className == "white") {
    body.className = "gray";
    body.style.backgroundColor = "white";
    backgroundColor.innerText = "Modo escuro";
  } else {
    body.className = "white";
    body.style.backgroundColor = "gray";
    backgroundColor.innerText = "Modo claro";
  }
}

function changeTextColor() {
  if (text.className == "yellow") {
    text.className = "black";
    text.style.color = "black";
    textColor.innerText = "Mudar para texto em amarelo";
  } else {
    text.className = "yellow";
    text.style.color = "gold";
    textColor.innerText = "Mudar para texto em preto";
  }
}

function changeFontSize() {
  if (texto.className == "16") {
    texto.className = "25";
    texto.style.fontSize = "16px";
    fontSize.innerText = "Aumentar fonte";
  } else {
    texto.className = "16";
    fontSize.innerText = "Diminuir fonte";
    texto.style.fontSize = "25px";
  }
}

function changeFontFamily() {
  if (font.className == "mono") {
    font.className = "serif";
    font.style.fontFamily = "fantasy";
    changeFont.innerText = "Trocar fonte";
  } else {
    font.className = "mono";
    font.style.fontFamily = "Courier New";
    changeFont.innerText = "Trocar fonte";
  }
}
