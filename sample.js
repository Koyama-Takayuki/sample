function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    
    let x = frameCount%width;
    let y = height/2 + sin(frameCount*0.1)*100;
    fill(100, 200, 200);
    ellipse(x, y, 20, 20);
}
