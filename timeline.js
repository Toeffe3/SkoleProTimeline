console.log(data.events.length);
var tlbox = {};
var h = 0;

function setup() {
  createCanvas(1400,600);
  background(0);

  stroke(255);
  strokeWeight(3);
  line(0, height/2, width, height/2);

  stroke(0);
  strokeWeight(2);
  var size = width / data.events.length - .1;

}

function draw() {
  hover();

}

function hover() {
  var size = width / data.events.length - .1;
  for (var i = 0; i < data.events.length; i++) {
    if (mouseX >= i*size && mouseY >= height/2-5 && mouseX <= i*size+size && mouseY <= height/2-5+10) {
      fill(255,0,0);
      tlbox[i] = rect(i*size, height/2-5, size, 10);
    } else {
      fill(255-(i*20),112-(i*20),19);
      tlbox[i] = rect(i*size, height/2-5, size, 10);
      h++;
      fill(255);

      text(i, height/2+(h%2*10), data.events[i].Year)
    }
  }
}
