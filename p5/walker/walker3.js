let walkers = [];

let angle = 0;
let a;

let cGreen;
let cPurple;
let cYellow;
let cArray;

function setup() {
    createCanvas(windowWidth, windowWidth);
    a = new walker();

    cGreen = color(0, 200, 80, 80);
    cPurple = color(99, 104, 199, 80);
    cYellow = color(241, 245, 69, 80);
    cArray = [cGreen, cPurple, cYellow]


}
function mouseClicked() {
    walkers.push(new walker());
}

function draw() {

    translate(windowWidth / 2 - 200, windowHeight / 2 - 200);
    background(210, 214, 214);
    // stroke(0);
    noStroke();


    for (let i = 0; i < walkers.length; i++) {


        walkers[i].moveCircle();
        let cFill = cArray[i % 3]
        fill(cFill);
        walkers[i].changeSize();
        walkers[i].display();
        walkers[i].recordTrail();
        walkers[i].drawTrail();


    }



}

