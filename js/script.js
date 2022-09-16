const myChart = document.getElementById("wheel");
const wheel = document.getElementById("wheel");
const spinBtn = document.querySelector(".start__now__btn");
const finalValue = document.getElementById("final-value");
const input = document.getElementById("input")

spinBtn.addEventListener("click", () => {
  const randomAngel = Math.floor(Math.random()*360)/360
  const noOfIterations = Math.ceil(Math.random()*3) + randomAngel;
  console.log(randomAngel,noOfIterations)
  wheel.style.animationDuration = "1s";
  wheel.style.animationTimingFunction = "linear";
  wheel.style.animationName = "rotate";
  wheel.style.animationIterationCount = noOfIterations;
  wheel.style.animationFillMode = "forwards";
  if (randomAngel * 360 > 25 && randomAngel * 360 <= 85) {
    input.value = 1;
    console.log(1)
  } else if (randomAngel * 360 > 325 && randomAngel * 360 <= 25) {
    input.value = 6;
    console.log(6)
  } else if (randomAngel * 360 > 85 && randomAngel * 360 <= 145) {
    input.value = 2;
    console.log(2)
  } else if (randomAngel * 360 > 145 && randomAngel * 360 <= 205) {
    input.value = 3;
    console.log(3)
  } else if (randomAngel * 360 > 205 && randomAngel * 360 <= 265) {
    input.value = 4;
    console.log(4)
  } else if (randomAngel * 360 > 265 && randomAngel * 360 < 325) {
    input.value = 5;
    console.log(5)
  } else {
    input.value = 6;
    console.log(6)
  }
})