// `this` refers to the current instance of the GameView class.
//  this.ctx, this.width, etc, are properties of the current instance of the GameView class.
class GameView {
  constructor() {
    let canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.offsetTop = canvas.offsetTop;
  }

  // Rest parameters (indicated by three dots (...)) followed by the parameter name
  // allow you to represent an indefinite number of arguments as an array.
  draw(...entities) {
    // Fill the Canvas with Black
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);

    entities.forEach((entity) => entity.draw(this.ctx));
  }

  drawScores(scores) {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px monospace";

    this.ctx.textAlign = "left";
    this.ctx.fillText(scores.leftScore.toString(), 50, 50);

    this.ctx.textAlign = "right";
    this.ctx.fillText(scores.rightScore.toString(), -50, 50);
  }

  drawGameOver() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px monospace";
    this.ctx.textAlign = "center";
    this.text.fillText("GAME OVER", this.width / 2, this.height / 2);
  }
}

class Entity {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  boundingBox() {
    return {
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Paddle extends Entity {
  static WIDTH = 5; // Caps as they are to be tret as constants
  static HEIGHT = 20;
  static OFFSET = 10;

  constructor(x, y) {
    super(x, y, Paddle.WIDTH, Paddle.HEIGHT); // Uses super to call the constructor if ots superclass (Entity)
  }
}

class Ball extends Entity {
  static SIZE = 5;

  constructor() {
    super(0, 0, Ball.SIZE, Ball.SIZE); // The 0's (X & Y) are just placeholders and the ball's position is handled by init()
    this.init();
  }

  init() {
    this.x = 20;
    this.y = 30;
    this.xSpeed = 4;
    this.ySpeed = 2;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  adjustAngle(distanceFromTop, distanceFromBottom) {
    if (distanceFromTop < 0) {
      // If the ball is hit near the top of the paddle, reduce the ySpeed
      this.ySpeed -= 0.5;
    } else if (distanceFromBottom < 0) {
      // If the ball is hit near the bottom of the padde, increase the ySpeed
      this.ySpeed += 0.5;
    }
  }
}
