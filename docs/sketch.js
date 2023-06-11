let canvas;

let num = 10;
let ps = new Array(num);
let w;

function canvasSetup(){
    background(255);

    w = max(width, height);

    for (let i = 0; i < num; i++) {
        ps[i] = new particles();
    }
}

function windowResized(){
    resizeCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
    canvasSetup();
}

function setup() {
    canvas = createCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

    canvasSetup();
    angleMode(DEGREES);
}

function draw() {
    background(255);

    fill(0);
    noStroke();
    for (let i = 0; i < num; i++) {
        ps[i].update();
        ps[i].display();
    }
}

class particles {
    constructor() {
        this.mr = random(width / 10, width / 4);
        this.mx = random(-this.mr, width + this.mr);
        this.my = random(-this.mr, height + this.mr);
        this.angle = random(360);
        this.adan = random(-1, 1);
        this.mxn = random(-this.mr, this.mr);
        this.myn = random(-this.mr, this.mr);
        this.adx = random(-1, 1);
        this.ady = random(-1, 1);
        this.rn = random(w);
        this.an = random(360);
        this.pnum = int(random(1, 10)) * 10;
        this.ern = random(1, this.mr / 15);
    }

    update() {
        this.mx += this.adx;
        this.my += this.ady;
        this.angle += this.adan;
        if (this.mx < -this.mr || this.mx > width + this.mr) {
            this.adx = -this.adx;
        }
        if (this.my < -this.mr || this.my > height + this.mr) {
            this.ady = -this.ady;
        }
        if (this.angle > 360 || this.angle < 0) {
            this.angle = 0;
        }
    }

    display() {
        push();
        let adx = map(noise(this.mxn), 0, 1, -this.mr, this.mr);
        let ady = map(noise(this.myn), 0, 1, -this.mr, this.mr);
        this.mxn += 0.01;
        this.myn += 0.01;
        translate(this.mx + adx, this.my + ady);
        rotate(this.angle);

        for (let j = 0; j < this.pnum; j++) {
            let sr = map(noise(j, this.rn), 0, 1, 0, w);
            let ang = map(noise(j, this.an), 0, 1, 0, 360);
            let er = map(noise(j, this.ern), 0, 1, 1, this.mr / 15);

            ellipse(sr / 2 * cos(ang), sr / 2 * sin(ang), er, er);
        }
        this.rn += 0.001;
        this.an += 0.001;
        this.ern += 0.1;
        pop();
    }
}