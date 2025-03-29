function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(framaCount%256);aaa
    let x = frameCount%width;
    let y = height/2 + sin(frameCount*0.1)*50;
    ellipse(x, y, 20, 20);
}
