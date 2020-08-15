var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var totalCount = 0;
var background = new Background(["#39FF14", "#4169e1", "#FF69B4"]);
var cat = new Cat(380, 100, "up.png", "clear_cat.png");
var table = new Table();


document.addEventListener("click", clickHandler, false);

function clickHandler(e) {

  cat.handleClick();
  background.handleClick();
  ++totalCount;
}


function drawCount() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Boings: " + totalCount, 8, 20);
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw(ctx);
  cat.draw(ctx);
  table.draw(ctx);

  requestAnimationFrame(draw);
}

draw();
