function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  var size = width / data.events.length - .1;
}

function draw() {
  createCanvas(windowWidth-100, windowHeight);
  var h = 0;
  var size = width / data.events.length - .1;
  background(0);
  for (var i = 0; i < data.events.length; i++) {
    if (mouseX >= i*size /*&& mouseY >= height/2-5*/ && mouseX <= i*size+size /*&& mouseY <= height/2-5+10*/) {
      document.getElementById('thumbnail').src = data.events[i].Picr;
      noStroke();
      fill(42, 200, 255);
      rect(i*size, height/2-5, size, 12);
      stroke(0);
      if(i*size >= width - 250) {
        rect(width-250, height/2-140, 250, 100);
        fill(255);
        noStroke();
        textStyle(NORMAL);
        text(data.events[i].Desc, width-250+4, height/2-140+4, 246, 100-4);
      } else {
        rect(i*size, height/2-140, 250, 100);
        fill(255);
        noStroke();
        textStyle(NORMAL);
        text(data.events[i].Desc, i*size+4, height/2-140+4, 246, 100-4);
      }
    } else {
      fill(0+(i*10),112+(i*10),19);
      stroke(0);
      rect(i*size, height/2-5, size, 10);
    }
    h++;
    noStroke();
    fill(255);
    textSize(10);
    textStyle(NORMAL);
    text(data.events[i].Year, i*size, height/2-(h%2*25)+8, size*2, 10);
    textSize(12);
    textStyle(BOLD);
    text(data.events[i].Title, i*size, height/2-(h%2*50)+19, size*2, 12);
  }
}
