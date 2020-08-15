class Table {
  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(0, 175);
    ctx.lineTo(960, 390);
    ctx.stroke();
  }
}