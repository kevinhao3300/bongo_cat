class Cat {
  constructor(x, y, imgUp, imgDown) {
    this.instrument = new Instrument(
      "Table",
      1,
      "sounds/low_open.wav",
      "bongos.png"
    );
    this.x = x;
    this.y = y;
    this.imgUp = new Image();
    this.imgUp.src = imgUp;
    this.imgDown = new Image();
    this.imgDown.src = imgDown;
    this.handsUp = true;
    this.timeout = 0;
  }

  handleClick() {
    if (this.timeout === 0) {
      this.handsUp = false;
      this.instrument.play();
      this.timeout = 40;
    }
  }

  draw(ctx) {
    this.instrument.draw();
    if (this.handsUp) {
      ctx.drawImage(this.imgUp, this.x, this.y);
    } else {
      ctx.drawImage(this.imgDown, this.x, this.y);
    }

    if (this.timeout > 0) {
      --this.timeout;
      if (this.timeout < 20) {
        this.handsUp = true;
      }
    }
  }

  setInstrument(instrument) {
    this.instrument = instrument;
  }
}
