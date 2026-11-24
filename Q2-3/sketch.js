function setup() {
  createCanvas(500, 300);
  noStroke();
  fill(200, 16, 46);
  rect(0, 0, width, height);
  fill(255);
  rect(0, 0, 150, height);

  for (let i = 0; i < 5; i++) {
    triangle(
      150, i * 60,
      150, (i + 1) * 60,
      210, i * 60 + 30
    );
  }
}