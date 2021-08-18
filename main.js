function setup() {
    canvas=createCanvas(700,500);
    canvas.position(370, 150);
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video,0,0,700,500);

    circle(50, 10, 200);
    fill (255, 102, 102);
   stroke(153, 187, 255);

   circle(650, 10, 200);
   fill (255, 102, 102);
   stroke(153, 187, 255);

   circle(650, 500, 200);
   fill (255, 102, 102);
   stroke(153, 187, 255);

   circle(50, 500, 200);
   fill (255, 102, 102);
   stroke(153, 187, 255);


   rect(140, 0, 420, 55);
   rect(140, 455, 420, 55);
   rect();

   
}

