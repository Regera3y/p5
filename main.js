function preload() 
{
}
  
  function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(110, 250);

    video = createCapture(VIDEO);
    video.hide()
  }
  
  function draw() {
    image(video, 0, 0, 640, 480);
    fill("green")
    rect(50, 50, 300, 10)
    rect(50, 350, 300, 10)
    rect(350, 50, 10, 300)
    rect(50, 50, 10, 300)
    fill('red');
    stroke(0, 128, 0);
    circle(50, 50, 70)
    circle(350, 50, 70)
    circle(50, 350, 70)
    circle(350, 350, 70)
  }
  function take_snapshot(){
    save("png.png");
}
