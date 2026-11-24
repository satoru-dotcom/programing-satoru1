// 心臓の鼓動のようなアニメーション
const cycle = 200; // 1周期のフレーム数
let count = 0; // 何フレーム目か

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);
  
  let speed = 1; // アニメーションの速さ
   let size = 75; // BLANK[2]
  count = (count + speed) % cycle;
  if(keyIsPressed){
    count = (count + 5) % cycle;
    }
  if (count <cycle/2){size+=1;
  } 
  else {
    size-=1;
  }
  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  ellipse(width / 2, height / 2, size);
}
