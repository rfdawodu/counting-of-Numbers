const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const clic = document.querySelectorAll(".color");
const button = document.querySelector(".btn");

// red.onclick = () => console.log("red");

const timesClicked = { red: 0, yellow: 0, green: 0 };
clic.forEach((clicked) => {
  clicked.onclick = () => {
    timesClicked[clicked.value] += 1;
    clicked.innerText = timesClicked[clicked.value];
  };
});

function clear() {
  timesClicked.red = 0;
  timesClicked.red = 0;
  timesClicked.red = 0;
  clic.forEach((clicked) => (clicked.innerText = "0"));
}

button.onclick = () => clear();
