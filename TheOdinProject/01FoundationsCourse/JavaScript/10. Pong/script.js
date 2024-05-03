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
