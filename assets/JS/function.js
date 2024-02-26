const buttonBG = document.getElementById("_buttonBG");
const buttonJW = document.getElementById("_buttonJW");
const buttonBN = document.getElementById("_buttonBN");
const buttonFE = document.getElementById("_buttonFE");
const buttonSB = document.getElementById("_buttonSB");

buttonBG.addEventListener("click", () => {
  window.open("BackgroundAnimation/bgAnimation.html", "_self");
});

buttonJW.addEventListener("click", () => {
  window.open("JumpWords/jumpwords.html", "_self");
});

buttonBN.addEventListener("click", () => {
  window.open("Bell/Bell.html", "_self");
});

buttonFE.addEventListener("click", () => {
  window.open("Illumination/illlumination.html", "_self");
});

buttonSB.addEventListener("click", () => {
  window.open("Search/search.html", "_self");
});
