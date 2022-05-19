document.querySelector("#header-container").style.backgroundColor = "green";
document.querySelector(".emergency-tasks").style.backgroundColor = "coral";
document.querySelector(".no-emergency-tasks").style.backgroundColor = "gold";
document.querySelector("#footer-container").style.backgroundColor =
  "darkslateblue";
let h3BackGround = document.querySelectorAll(".emergency-tasks h3");
let h3NoBackGround = document.querySelectorAll(".no-emergency-tasks h3");

for (let i = 0; i < h3BackGround.length; i += 1) {
  h3BackGround[i].style.backgroundColor = "purple";
}

for (let i = 0; i < h3NoBackGround.length; i += 1) {
  h3NoBackGround[i].style.backgroundColor = "black";
}
