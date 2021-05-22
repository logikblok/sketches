function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER)
  grid1();
}

function mousePressed() {
  grid1();
}

// function keyPressed() {
//   saveCanvas('grid', 'jpg');
// }

function grid1() {
  const topColor = color('#9D7EF3');
  const bottomColor = color('#D7EBEB');

  for(let y = 0; y < 1000; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);
    stroke(lineColor);
    line(0, y, width, y);
  }

  let w = 50;
  let h = w;

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      noFill();
      stroke('#EF9CDA');
      strokeWeight(5);
			tsize = 40
      let r = random(4);

      if (r < 1) {
        // diagonal top-left to bottom-right
        push()
        fill('#EF9CDA')
        rect(x,y,tsize)
        pop()
      } else if (r < 2) {
        // diagonal top-right to bottom-left
        //line(x + w, y, x, y + h);
        rect(x,y,tsize)
      } else if (r < 3.5) {
        // straight across top
        rect(x,y,tsize)
      } else {
        //line(x, y, x + w, y + h);
				rect(x,y,tsize)
      }

    }
  }

}
