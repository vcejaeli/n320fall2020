class Circle {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 10 + Math.random() * 18;
    }

    update() {
        this.y ++;
        fill(this.color);
        circle( this.x, this.y, this.radius);
    }    
}


var myCircles = [];
myCircles[0] = new Circle(100, 10, 8, [255, 255, 255]);
myCircles[1] = new Circle(300, 90, 9, [255, 255, 255]);
myCircles[2] = new Circle(500, 180, 6, [255, 255, 255]);
myCircles[3] = new Circle(400, 10, 8, [255, 255, 255]);
myCircles[4] = new Circle(550, 140, 9, [255, 255, 255]);
myCircles[5] = new Circle(450, 200, 6, [255, 255, 255]);

function setup() {
    createCanvas(600,500);
}

function draw() {
    background(86, 126, 166);

    myCircles[0].update();
    myCircles[1].update();
    myCircles[2].update();
    myCircles[3].update();
    myCircles[4].update();
    myCircles[5].update();

}

//change color 

// having a hard time understanding, need to work at understanding content better.


// example I found -- ignore -- 
// var drop = []

// function setup() {
//   createCanvas(400, 400);
//   for(var i = 0; i < 200; i++) {
//     drop[i] = new Drop();
// }
// }

// function draw() {
//   background(0);
//   for(var i = 0; i < 200; i++) {
//   drop[i].show();
//   drop[i].update();
// }
// }

// function Drop() {
//   this.x = random(0, width);
//   this.y = random(0, -height);
  
//   this.show = function() {
//     noStroke();
//     fill(255);
//     ellipse(this.x, this.y, random(1, 5), random(1, 5));   
//   }
//   this.update = function() {
//     this.speed = random(5, 10);
//     this.gravity = 1.05;
//     this.y = this.y + this.speed*this.gravity;  
    
//     if (this.y > height) {
//       this.y = random(0, -height);
//       this.gravity = 0;
// }
// }
// }
