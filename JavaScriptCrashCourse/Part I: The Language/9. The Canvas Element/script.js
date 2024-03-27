let canvas = document.querySelector("#canvas");
let ctx = canvas.getContent("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.strokeRect(10, 10, 200, 100);

// 9.1
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 100, 100);
//

// 9.2
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 350, 350);
//

ctx.strokeStyle = "orange";
ctx.fillRect(20, 20, 180, 80);

ctx.strokeStyle = "yellow";
ctx.fillRect(30, 30, 160, 60);

ctx.strokeStyle = "green";
ctx.strokeRect(40, 40, 140, 40);

ctx.strokeStyle = "blue";
ctx.strokeRect(50, 50, 120, 20);

// 9,3
ctx.lineWidth = 2;

let colors = ["red", "orange", "yelow", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  ctx.strokeStyle = colors[i];
  let offset = i * 10;

  ctx.strokeRect(10 + offset, 10 + offset, 200 - offset * 2, 100 - offset * 2);
}
//

// Drawing a Triangle
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(150, 15);
ctx.lineTo(200, 100);
ctx.lineTo(100, 100);
ctx.fill();

// Drawing a Circle
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI * 2, false);
ctx.fill();

// 9.6
let x = 0;
let y = 0;

let width = canvas.width;
let height = canvas.height;

function drawCircle(x, y) {
  ctx.fillStyle = "rgb(0, 128, 255)";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

function update() {
  x += 1;
  x %= width;
  y += 1;
  y %= height;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawCircle(x, y);
  // alternative approach:
  drawCircle(x % width, y % height);
}

setInterval(() => {
  update();
  draw();
}, 10);
//
