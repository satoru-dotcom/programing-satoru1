// チェッカー
function setup() {
  createCanvas(400, 400);

  let size = 50;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      
      if ((i + j) % 2 == 0) {
        fill(255);
      } else {
        fill(160, 160, 160);
      }

      rect(j * size, i * size, size, size);

  
      if (i < 3 && (i + j) % 2 == 1) {
        fill(255, 0, 0);
        ellipse(j * size + size / 2, i * size + size / 2, size, size
        );
      }

    
      else if (i > 4 && (i + j) % 2 == 1) {
        fill(0);
        ellipse( j * size + size / 2, i * size + size / 2, size, size
        );
      }
    }
  }
}