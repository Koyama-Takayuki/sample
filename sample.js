function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    let x = frameCount%width;
    let y = height/2 + sin(frameCount*0.1)*50;
    ellipse(x, y, 20, 20);

    fill(200);
    ellipse(mouseX, mouseY, 40, 40);
}
