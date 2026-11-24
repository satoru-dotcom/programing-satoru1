let balls = [];

const gravity = 0.6;
const groundY = 500;

function setup() {
  createCanvas(800, 600);
}

// ボールを作る関数
function createBall(x, y) {
  let ball = {
    x: x,
    y: y,
    size: random(30, 60),
    vy: 0,
    color: color(random(255), random(255), random(255))
  };

  balls.push(ball);
}

// ボールを動かす関数
function updateBall(ball) {
  // 重力を加える
  ball.vy += gravity;
  ball.y += ball.vy;

  // 地面に着いたら跳ね返る
  if (ball.y + ball.size / 2 >= groundY) {
    ball.y = groundY - ball.size / 2;
    ball.vy *= -0.8;

    // 跳ねる力が弱くなったら止める
    if (abs(ball.vy) < 2) {
      ball.vy = 0;
    }
  }
}

// ボールを描画する関数
function drawBall(ball) {
  fill(ball.color);
  noStroke();
  circle(ball.x, ball.y, ball.size);
}

function draw() {
  background(220);

  // 地面を描く
  fill(100);
  rect(0, groundY, width, height - groundY);

  // 配列に入っているすべてのボールを処理
  for (let i = 0; i < balls.length; i++) {
    updateBall(balls[i]);
    drawBall(balls[i]);
  }

  // 説明を表示
  fill(0);
  textSize(20);
  text("Click to add balls!", 20, 30);
}

// マウスをクリックするとボールを追加
function mousePressed() {
  if (mouseY < groundY) {
    createBall(mouseX, mouseY);
  }
}