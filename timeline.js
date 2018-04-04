function setup() {
  createCanvas(1500,800);
  var size = width / data.events.length - .1;
}

function draw() {
  var h = 0;
  var size = width / data.events.length - .1;
  background(0);
  for (var i = 0; i < data.events.length; i++) {
    if (mouseX >= i*size && mouseY >= height/2-5 && mouseX <= i*size+size && mouseY <= height/2-5+10) {
      fill(42, 200, 255);
      rect(i*size, height/2-5, size, 10);
      if(i*size >= width - 250) {
        rect(width-250, 120, 250, 150);
        fill(255);
        noStroke();
        text(data.events[i].Desc, width-250+4, 124, 246, 246);
      } else {
        rect(i*size, 120, 250, 150);
        fill(255);
        noStroke();
        text(data.events[i].Desc, i*size+4, 124, 246, 246);
      }

    } else {
      fill(0+(i*10),112+(i*10),19);
      rect(i*size, height/2-5, size, 10);
    }
    h++;
    stroke(0);
    strokeWeight(2);
    fill(255);
    textSize(10);
    textStyle(NORMAL);
    text(data.events[i].Year, i*size, height/2-(h%2*25)+8, size*2, 10);
    textSize(12);
    textStyle(BOLD);
    text(data.events[i].Title, i*size, height/2-(h%2*50)+19, size*2, 12);
  }
}
