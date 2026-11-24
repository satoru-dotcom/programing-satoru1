// 小手調べ
function setup(){
  createCanvas(100, 100);
  noFill();
  for(let i = 0; i < 10; i++){
   let size =(i+1)*10;
   if (i<4){stroke(255,0,0);
  }
  else{stroke(0,0,255);}
   ellipse(50,50,size, size);
  }
}