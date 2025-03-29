let speed = 0.1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);

    speed = map(mouseX, 0, width, 0.01, 0.3);
    let x = frameCount%width;
    let y = height/2 + sin(frameCount*speed)*100;
    fill(255, 0, 0);
    ellipse(x, y, 20, 20);

    fill(100, 200, 200);
    ellipse(mouseX, mouseY, 40, 40);
}
