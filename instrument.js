class Instrument {
  constructor(name, points, sound, img) {
    this.name = name;
    this.points = points;
    this.sound = new Audio();
    this.sound.src = sound;
    this.img = null;
    if (img != null) {
      this.img = new Image();
      this.img.src = img;
    }
  }

  play() {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  draw() {
    if (this.img != null) {
      ctx.drawImage(this.img, 280, 260);
    }
  }

}