const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".color-themes").classList.toggle("open");
});

const alternateColor = document.querySelectorAll(".alternate-color");
const ma = document.getElementById("MA");
const pimg = document.getElementById("pimg");
function setActiveColor(color) {
  alternateColor.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      // ma.src = `${color}.png`;
      // pimg.src = `${color}.png`;
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
