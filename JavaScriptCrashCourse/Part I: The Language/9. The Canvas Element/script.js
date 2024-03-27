let canvas = document.querySelector("#canvas");
let ctx = canvas.getContent("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.strokeRect(10, 10, 200, 100);

// 9.1
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 100, 100);

// 9.2
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 350, 350);
