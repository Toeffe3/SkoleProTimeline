console.log(data.events.length);
var tlbox = {};

function setup() {
  createCanvas(1400,600);


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
  var h = 0;
  var size = width / data.events.length - .1;
  background(0);
  for (var i = 0; i < data.events.length; i++) {
    if (mouseX >= i*size && mouseY >= height/2-5 && mouseX <= i*size+size && mouseY <= height/2-5+10) {

      fill(255,0,0);
      tlbox[i] = rect(i*size, height/2-5, size, 10);
    } else {
      fill(255-(i*20),112-(i*20),19);
      tlbox[i] = rect(i*size, height/2-5, size, 10);
    }
    h++;
    fill(255);
    textSize(10);
    textStyle(NORMAL);
    text(data.events[i].Year, i*size, height/2-(h%2*25)+8, size, 10);
    textSize(12);
    textStyle(BOLD);
    text(data.events[i].Title, i*size, height/2-(h%2*50)+19, size, 12);
  }

}
