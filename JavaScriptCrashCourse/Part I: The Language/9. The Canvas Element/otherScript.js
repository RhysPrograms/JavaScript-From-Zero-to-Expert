let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let opacity = 1;
let red = 0;
let green = 255;
let blue = 0;

function drawCircle(x, y) {
  ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
  ctx.beginPath;
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

canvas.addEventListener("click", (e) => {
  drawCircle(e.offsetX, e.offsetY);
});

document.querySelector("#clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, width, height);
});

document.querySelector("#opacity").addEventListener("change", (e) => {
  opacity = e.target.value;
});

// 9.4
document.querySelector("#red").addEventListener("change", (e) => {
  red = e.target.value;
});

document.querySelector("#green").addEventListener("change", (e) => {
  green = e.target.value;
});

document.querySelector("#blue").addEventListener("change", (e) => {
  blue = e.target.value;
});
//

// 9.5

//
