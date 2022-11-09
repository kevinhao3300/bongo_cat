var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var totalCount = 0;
var background = new Background(["#39FF14", "#4169e1", "#FF69B4"]);
var cat = new Cat(380, 100, "up.png", "clear_cat.png");
var table = new Table();
var timeout = 0;

document.addEventListener("click", clickHandler, false);
document.addEventListener("keydown", keyDownHandler, false);

function clickHandler(e) {
  cat.handleClick();
  background.handleClick();
  if (timeout === 0) {
    ++totalCount;
    timeout = 40;
  }
}

function keyDownHandler(e) {
  clickHandler(e);
}

function drawCount() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Boings: " + totalCount, 8, 20);
}

function draw() {
  if (timeout > 0) {
    --timeout;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw(ctx);
  cat.draw(ctx);
  table.draw(ctx);
  drawCount();

  requestAnimationFrame(draw);
}

draw();
