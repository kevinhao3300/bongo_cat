var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const upImg = new Image();
upImg.src = "up.png";
const downImg = new Image();
downImg.src = "clear_cat.png";
const bongosImg = new Image();
bongosImg.src = "bongos.png";
var low_open = new Audio();
low_open.src = "sounds/low_open.wav";
var tableSlap = new Audio();
tableSlap.src = "sounds/tableSlap.mp3";


console.log(bongosImg.width, bongosImg.height);
var handsUp = true;
var hold = false;
var colors = ["#39FF14", "#4169e1", "#FF69B4"];
var index = 0;
var bongs = 0;

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("click", clickHandler, false);

function clickHandler(e) {
  handsUp = false;
  var rand = index;
  while (rand == index)
    rand = Math.floor(Math.random() * colors.length);
  index = rand;
  ++bongs;
}


function keyDownHandler(e) {
  handsUp = false;
  var rand = index;
  while (rand == index)
    rand = Math.floor(Math.random() * colors.length);
  index = rand;
}


function drawCat() {
  if (handsUp) {
    ctx.drawImage(upImg, 380, 100);
  } else {
    ctx.drawImage(downImg, 380, 100);
    tableSlap.currentTime = 0;
    tableSlap.play();
    if (hold) {
      handsUp = true;
    } else {
      hold = true;
    }
  }
}

function drawBongos() {
  ctx.drawImage(bongosImg, 280, 260);
}

function drawTable() {
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.moveTo(0, 175);
  ctx.lineTo(960, 390);
  ctx.stroke();
}

function drawWall() {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(0, 0);
  ctx.lineTo(960, 0);
  ctx.lineTo(960, 390);
  ctx.lineTo(0, 175);
  ctx.lineTo(0, 0);
  ctx.fillStyle = colors[index];
  ctx.fill();
}

function drawCount() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Bongs: " + bongs, 8, 20);
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWall();
  drawTable();
  drawBongos();
  drawCat();
  drawCount();

  requestAnimationFrame(draw);
}

draw();
