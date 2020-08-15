class Cat {
  constructor(x, y, imgUp, imgDown) {
    this.instrument = new Instrument("Table", 1, "sounds/low_open.wav", "bongos.png");
    this.x = x;
    this.y = y;
    this.imgUp = new Image();
    this.imgUp.src = imgUp;
    this.imgDown = new Image();
    this.imgDown.src = imgDown;
    this.handsUp = false;
    this.hold = false;
  }

  handleClick() {
    this.handsUp = false;
    this.instrument.play();
  }

  draw(ctx) {
    this.instrument.draw();
    if (this.handsUp) {
      ctx.drawImage(this.imgUp, this.x, this.y);
    }
    else {
      ctx.drawImage(this.imgDown, this.x, this.y);
      if (this.hold) {
        this.handsUp = true;
      } else {
        this.hold = true;
      }
    }
  }

  setInstrument(instrument) {
    this.instrument = instrument;
  }




}