let canvas;
let w, g, mxf;

function canvasSetup() {
  background(255);
  w = max(width, height);
  g = w / 20;
  mxf = int(random(2, 200));
}

function windowResized() {
  resizeCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
  canvasSetup();
}

function setup() {
  canvas = createCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  frameRate(60);

  canvasSetup();
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeCap(SQUARE);

  display();
}

function draw() {
  if (frameCount % mxf == 0) {
    background(255);
    display();
    mxf = int(random(2, 200));
  }
}

function display() {
  let index = int(random(16));
  for (let y = g / 2; y <= w - g / 2; y += g) {
    let shx = random(-40, 40);
    for (let x = g / 2; x <= w - g / 2; x += g) {
      for (let c = 0; c <= g / 2; c += g / 8) {
        drawTxts(x + c, y + random(-g / 8, g / 8), g, index, shx);
      }

      index++;
      if (index >= 15) {
        index = 0;
      }
    }
  }
}

function drawTxts(posx, posy, r, sw, nshx) {
  push();
  translate(posx, posy);
  shearX(nshx);
  scale(0.8);

  if (int(random(100)) == 0) {
    stroke(random([0, "#dc143c"]));
  } else {
    stroke(random([230, 255]));
  }
  
  let lr = random(1, r / 8);
  strokeWeight(lr);
  noFill();

  if (sw == 0) {
    line(0, -r / 2, r / 2, -r / 2);
    line(0, r / 2, r / 2, r / 2);
    arc(0, 0, r, r, 90, 270);
  }

  if (sw == 1) {
    line(-r / 2, -r / 2, r / 4, -r / 2);
    line(-r / 2, 0, r / 4, 0);
    arc(r / 4, -r / 4, r / 2, r / 2, 270, 90);
    line(-r / 2, -r / 2 - lr / 2, -r / 2, r / 2);
    line(-r / 2, 0, r / 2, r / 2);
  }

  if (sw == 2) {
    beginShape();
    vertex(r / 2, -r / 2);
    vertex(-r / 2, -r / 2);
    vertex(-r / 2, r / 2);
    vertex(r / 2, r / 2);
    endShape();

    line(-r / 2, 0, r / 2, 0);
  }

  if (sw == 3) {
    beginShape();
    vertex(-r / 2, r / 2);
    vertex(0, -r / 2);
    vertex(r / 2, r / 2);
    endShape();

    line(-r / 4, 0, r / 4, 0);
  }

  if (sw == 4) {
    line(-r / 2, -r / 2, r / 2, -r / 2);
    line(0, -r / 2, 0, r / 2);
  }

  if (sw == 5) {
    line(0, -r / 2, 0, r / 2);
  }

  if (sw == 6) {
    beginShape();
    vertex(-r / 2, -r / 2);
    vertex(0, r / 2);
    vertex(r / 2, -r / 2);
    endShape();
  }

  if (sw == 7) {
    beginShape();
    vertex(r / 2, -r / 2);
    vertex(-r / 2, -r / 2);
    vertex(-r / 2, r / 2);
    vertex(r / 2, r / 2);
    endShape();

    line(-r / 2, 0, r / 2, 0);
  }

  if (sw == 9) {
    line(0, -r / 2, r / 2, -r / 2);
    line(0, r / 2, r / 2, r / 2);
    arc(0, 0, r, r, 90, 270);
  }

  if (sw == 10) {
    ellipse(0, 0, r * 1.1, r * 1.1);
  }

  if (sw == 11) {
    beginShape();
    vertex(0, -r / 2);
    vertex(-r / 2, -r / 2);
    vertex(-r / 2, r / 2);
    vertex(0, r / 2);
    endShape();

    arc(0, 0, r, r, 270, 90);
  }

  if (sw == 12) {
    beginShape();
    vertex(r / 2, -r / 2);
    vertex(-r / 2, -r / 2);
    vertex(-r / 2, r / 2);
    vertex(r / 2, r / 2);
    endShape();

    line(-r / 2, 0, r / 2, 0);
  }

  if (sw == 13) {
    line(-r / 2, -r / 2, r / 4, -r / 2);
    line(-r / 2, 0, r / 4, 0);
    arc(r / 4, -r / 4, r / 2, r / 2, 270, 90);
    line(-r / 2, -r / 2 - lr / 2, -r / 2, r / 2);
    line(-r / 2, 0, r / 2, r / 2);
  }
  pop();
}
