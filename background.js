class Background {
  constructor(colors) {
    this.colors = colors;
    this.index = 0;
    this.timeout = 0;
  }

  handleClick() {
    if (this.timeout === 0) {
      var rand = this.index;
      while (rand == this.index)
        rand = Math.floor(Math.random() * this.colors.length);
      this.index = rand;
      this.timeout = 20;
    }
  }

  draw(ctx) {
    if (this.timeout > 0) {
      --this.timeout;
    }
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    ctx.lineTo(960, 0);
    ctx.lineTo(960, 390);
    ctx.lineTo(0, 175);
    ctx.lineTo(0, 0);

    ctx.fillStyle = this.colors[this.index];
    ctx.fill();
  }
}
