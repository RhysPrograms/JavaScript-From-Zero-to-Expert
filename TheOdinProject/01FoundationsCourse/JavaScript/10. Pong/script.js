let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

const BALL_SIZE = 5; // True Constant, all-caps style
let ballPosition = { x: 20, y: 30 };

let xSpeed = 4;
let ySpeed = 2;

const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 10;

let leftPaddleTop = 10;
let rightPaddleTop = 30;

function draw() {
  // Fill the canvas with black
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  // All remaining elements will be white
  ctx.fillStyle = "white";

  // Drawing the ball
  ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);

  // Drawing the Paddles
  ctx.fillRect(PADDLE_OFFSET, leftPaddleTop, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.fillRect(
    width - PADDLE_WIDTH - PADDLE_OFFSET,
    rightPaddleTop,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
}

function update() {
  ballPosition.x += xSpeed;
  ballPosition.y += ySpeed;
}

function checkCollision() {
  let ball = {
    left: ballPosition.x,
    right: ballPosition.x + BALL_SIZE,
    top: ballPosition.y,
    bottom: ballPosition.y + BALL_SIZE,
  };

  if (ball.left < 0 || ball.right > width) {
    xSpeed = -xSpeed;
  }

  if (ball.top < 0 || ball.bottom > height) {
    ySpeed = -ySpeed;
  }
}

function gameLoop() {
  draw();
  update();
  checkCollision();

  setTimeout(gameLoop, 30);
}

gameLoop();
