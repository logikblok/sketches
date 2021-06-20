var points = []
var mult = 0.006

function setup() {
  createCanvas(1000,1000)
  background('#063C42')
  frameRate()
  var density = 25
  var space = width / density

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x,y)
      points.push(p)
    }
  }
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
//   saveCanvas('topgraphy', 'jpg');
// }

function draw(){
  noStroke()
  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult,points[i].y * mult),0, 1, 0, width)

    points[i].add(createVector(sin(angle),cos(angle)))

    if (angle > 0.1) {
      fill('#BD6157')
    } else {
      fill('#73D2DF')
    }
    for (var y = 0; y < 3; y++) {
      //ellipse(points[i].x,points[i].y,1)
      ellipse((points[i].x)/y,(points[i].y)/y,2.5)
      //ellipse((points[i].x)+y*2,(points[i].y)+y,0.25)
    }

  }
}
