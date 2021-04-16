function setup() {
    createCanvas(600, 600);
    background(180);
}

function draw() {
    noFill();

    let noiseScale = 0.03;

    push();
    stroke(0);

    beginShape();
    for (let x = 0; x < height; x++) {
        y = width * noise(noiseScale * x);
        vertex(x, y);

    }
    endShape();
    pop();

    push();
    stroke(255);
    beginShape();
    for (let x = 0; x < height; x++) {
        y = width * noise(noiseScale * x + 100);
        vertex(x, y + 20);

    }
    endShape();
    pop();
}

