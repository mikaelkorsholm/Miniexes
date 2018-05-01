var topbar;
var sidebarLeft;
var sidebarRight;
var staTus;
var ads;

function preload(){
  sidebarLeft = loadImage('sidebarLeft.png');
  sidebarRight = loadImage('sidebarright.png');
  topbar = loadImage('topbar5.png');
  staTus = loadImage('status.png');
  ads = loadImage('ads.png');
}

function setup() {
  var inp = createInput('What is on your mind?');
  inp.input(myInputEvent);
  createCanvas(windowWidth, 4000);
  inp.position(width/2-285, 100);
  inp.size(420,50);
}

function draw() {
  background(234,235,239);
  noStroke();
  fill(65, 103, 178);
  rect(0,0,windowWidth, 43);
  image(topbar, 0,0);
  image(sidebarLeft, 0, 60, 275, 600);
  image(sidebarRight, windowWidth-230, 60, 200, 750);
  image(staTus, width/2-350, 60, 500, 150);
  image(ads, width-480, 59, 250, 750);
  text(this.value(), 50, 50);

}

function mousePressed(){
  console.log(mouseX, mouseY);
}

function myInputEvent(){
  text(this.value(), width/2-350,50);
}
