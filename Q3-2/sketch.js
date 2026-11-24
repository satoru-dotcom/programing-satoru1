

let x, y;
let vx, vy;
const g = 0.8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height * 0.75;
  vx = 0;
  vy = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(160, 192, 255);

  const size = height * 0.1;
  const groundY = height * 0.8;

  
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);


  if (keyIsDown(LEFT_ARROW)) {
    vx = -3;
  } else if (keyIsDown(RIGHT_ARROW)) {
    vx = 3;
  } else {
    vx = 0;
  }

  
  if (keyIsDown(LEFT_ARROW) && keyIsDown("a")) {
    vx = -5;
  } else if (keyIsDown(RIGHT_ARROW) && keyIsDown("a")) {
    vx = 5;
  }


  vy += g;

  
  if ((keyIsDown(UP_ARROW) || keyIsDown(32)) && y + size / 2 >= groundY) {
    vy = -15;
  }

  
  x += vx;
  y += vy;

  
  if (y + size / 2 >= groundY) {
    y = groundY - size / 2;
    vy = 0;
  }

  
  
  fill(0);
  ellipse(x, y, size, size);
}
