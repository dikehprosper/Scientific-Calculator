const buttonFunctions = document.querySelectorAll(".clickButton");
const parentStyle = document.querySelector(".parentStyle");
const displayScreen = document.querySelector(".displayScreen");
const buttons = document.querySelectorAll(".clickButton");
const parentButtons = document.querySelector(".buttons");
const style = document.querySelector(".style");
const displayAnswer = document.querySelector(".displayAnswer");
const sup = document.querySelectorAll(".sup");
const ans = document.querySelector("#ans");
const shiftButton = document.querySelector(".shiftButton");
const shiftCollections = document.querySelectorAll("shiftCollections");
const Heading = document.querySelector(".heading");
const ben = document.querySelectorAll(".ben");

shiftButton.addEventListener("click", function () {
  ben.forEach((shiftCollection) =>
    shiftCollection.classList.toggle("shiftCollections")
  );

  shiftButton.classList.toggle("display");
});
ben.forEach((item) =>
  item.addEventListener("click", function () {
    sup.forEach((item) => (item.style.color = "white"));
  })
);

buttonFunctions.forEach((buttonFunction) =>
  buttonFunction.addEventListener("click", operation)
);

function operation() {
  if (this.innerText == "CE") {
    let answer = displayAnswer.innerText.toString();
    displayAnswer.innerText = answer.substr(0, answer.length - 1);
  } else if (this.classList.contains("shiftCollections")) {
    displayAnswer.innerHTML = "";
    displayAnswer.innerText += this.id;
  } else if (this.innerHTML == "AC") {
    displayScreen.innerHTML = "0";
    displayAnswer.innerHTML = "";
  } else if (this.innerHTML == "Ans") {
    displayAnswer.innerHTML = "";
    displayAnswer.innerText += this.innerText;
  } else if (this.innerHTML == "SHIFT") {
    displayAnswer.innerHTML = "";
  } else if (this.innerHTML == "=") {
    if (displayAnswer.innerHTML.toString().includes("%")) {
      let per = displayAnswer.innerText.toString();
      per = per.substr(0, per.length - 1);
      displayScreen.innerText = "Ans = " + per / 100;
    } else if (displayAnswer.innerHTML.toString().includes("sinh-1")) {
      const term = displayAnswer.innerHTML.slice(7, displayAnswer.length);
      const term2 = term.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.asinh(term2);
    } else if (displayAnswer.innerHTML.toString().includes("cosh-1")) {
      const term = displayAnswer.innerHTML.slice(7, displayAnswer.length);
      const term2 = term.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.acosh(term2);
    } else if (displayAnswer.innerHTML.toString().includes("tanh-1")) {
      const term = displayAnswer.innerHTML.slice(7, displayAnswer.length);
      const term2 = term.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.atanh(term2);
    } else if (displayAnswer.innerHTML.toString().includes("sinh")) {
      const term = displayAnswer.innerHTML.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.sinh(term);
    } else if (displayAnswer.innerHTML.toString().includes("cosh")) {
      const term = displayAnswer.innerHTML.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.cosh(term);
    } else if (displayAnswer.innerHTML.toString().includes("tanh")) {
      const term = displayAnswer.innerHTML.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.tanh(term);
    } else if (displayAnswer.innerHTML.toString().includes("sin-1")) {
      const term = displayAnswer.innerHTML.slice(7, displayAnswer.length);
      const term2 = term.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.asin(term2);
    } else if (displayAnswer.innerHTML.toString().includes("cos-1")) {
      const term = displayAnswer.innerHTML.slice(7, displayAnswer.length);
      const term2 = term.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.acos(term2);
    } else if (displayAnswer.innerHTML.toString().includes("tan-1")) {
      const term = displayAnswer.innerHTML.slice(7, displayAnswer.length);
      const term2 = term.match(/\d+/g);
      displayScreen.innerHTML = "Ans = " + Math.atan(term2);
    } else if (displayAnswer.innerHTML.toString().includes("sin")) {
      const term = displayAnswer.innerHTML.match(/\d+/g);
      let term2 = Math.PI / 180;
      let term3 = term * term2;
      displayScreen.innerHTML = "Ans = " + Math.sin(term3);
    }
    if (displayAnswer.innerHTML.toString().includes("cos")) {
      let term = displayAnswer.innerHTML.match(/\d+/g);
      let term2 = Math.PI / 180;
      let term3 = term * term2;
      displayScreen.innerHTML = "Ans = " + Math.cos(term3);
    } else if (displayAnswer.innerHTML.toString().includes("tan")) {
      const term = displayAnswer.innerHTML.match(/\d+/g);
      let term2 = Math.PI / 180;
      let term3 = term * term2;
      displayScreen.innerHTML = "Ans = " + Math.tan(term3);
    } else {
      displayScreen.innerHTML = "Ans = " + eval(displayAnswer.innerText);
    }
  } else {
    if (displayAnswer.length <= 18) {
      displayAnswer.innerText += this.name;
    } else {
      displayAnswer.innerText += "x";
    }
  }
}

// for theme change

const colorMetrics = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

parentStyle.addEventListener("click", function () {
  {
    let Color1 = "#";

    for (let i = 0; i < 3; i++) {
      Color1 += colorMetrics[random()];
    }
    buttons.forEach((item) => (item.style.background = Color1));
    Heading.style.color = Color1;
  }
  function random() {
    return Math.floor(Math.random() * colorMetrics.length);
  }
});
