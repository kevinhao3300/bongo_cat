var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const up_img = new Image();
up_img.src = "up.png";
const down_img = new Image();
down_img.src = "clear_cat.png";
const bongos_img = new Image();
bongos_img.src = "bongos.png";
var low_open = new Audio();
low_open.src = "sounds/low_open.wav";

console.log(bongos_img.width, bongos_img.height);
var handsUp = true;
var hold = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  handsUp = false;
}

function keyUpHandler(e) {
  handsUp = true;
  hold = false;
}

function drawCat() {
  if (handsUp) {
    ctx.drawImage(up_img, 380, 100);
  } else {
    ctx.drawImage(down_img, 380, 100);
    low_open.currentTime = 0;
    low_open.play();
    if (hold) {
      handsUp = true;
    } else {
      hold = true;
    }
  }
}

function drawBongos() {
  ctx.drawImage(bongos_img, 280, 260);
}

function drawTable() {
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.moveTo(0, 175);
  ctx.lineTo(960, 390);
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTable();
  drawBongos();
  drawCat();

  requestAnimationFrame(draw);
}

draw();
