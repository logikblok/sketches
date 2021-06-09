var speed;

function setup() {
  createCanvas(500, 500);
  speed = 60
  // createLoop({
  //   duration: 6,
  //      gif: {
  //          options: { quality: 30},
  //          fileName: "topgraphy.gif",
  //          download: true,
  //          startLoop: 0,
  //          endLoop: 2
  //      }
  //  })
}

// function keyPressed() {
//   saveCanvas('movement', 'jpg');
// }

function draw() {
  background('#D980FA');
  motion();
  console.log(speed);
}

function motion() {
  var size = 40;
  var count = 10;
  translate(20, 20);
  for (var x = 3; x < 9; x++) {
    for (var y = 3; y < 9; y++) {
      push();
      translate(x * size, y * size);
      fill(255, 250, 255, 20);
      stroke('#1289A7');
      rotate((frameCount / speed + x / 0.01 + y / 1));
      rect(size/3, size/3, 20)
      strokeWeight(3);
      stroke(255,30);
      rotate((frameCount / speed + x / 0.01 + y / 2));
      rect(size/3, size/3, 10)
      pop();
    }
  }
}
