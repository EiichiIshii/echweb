let canvas;
let num = 24;
let sc = [];
let cl;

function canvasSetup() {
  background(255);
  cl = 180;

  for (let i = 0; i < num; i++) {
    sc[i] = new scene();
  }
}

function windowResized() {
  resizeCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
  //resizeCanvas(windowWidth, windowHeight);
  canvasSetup();
}

function setup() {
  canvas = createCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  canvasSetup();
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  for (let i = 0; i < num; i++) {
    sc[i].update();
  }
  stroke(cl);
  strokeWeight(1);
  noFill();
  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i < num; i++) {
    sc[i].display();
  }
  endShape(CLOSE);

  for (let i = 0; i < num; i++) {
    sc[i].display2();
  }
}

class scene {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.z = random(width / 20, width / 2);
    this.xn = random(-this.z, this.z);
    this.yn = random(-this.z, this.z);
    this.sdx = random(0.001, 0.01);
    this.sdy = random(0.001, 0.01);
    this.adx = 0;
    this.ady = 0;
    this.an = random(360);
  }

  update() {
    this.adx = map(noise(this.xn), 0, 1, -this.z, this.z);
    this.ady = map(noise(this.yn), 0, 1, -this.z, this.z);

    this.xn += this.sdx;
    this.yn += this.sdy;
  }

  display() {
    vertex(this.x + this.adx, this.y + this.ady);
  }

  display2() {
    fill(cl);
    noStroke();
    push();
    translate(this.x + this.adx, this.y + this.ady);
    let angle = map(noise(this.an), 0, 1, 0, 360);
    this.an += 0.01;
    rotate(angle);
    rect(0, 0, this.z/50, this.z/50);
    pop();
  }
}
