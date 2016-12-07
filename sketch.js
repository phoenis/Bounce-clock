var img;
var state = true;
var r, d, posX, posY;
var inc = 10;
var incrementX = inc;
var incrementY = inc;

function myImg() {
    for (var i=0; i<=2; i++) {
        push();
        var s=second();
        translate(0,s*i);	
        imageMode(CENTER);
        image(img,width/2,height/2,width, width*3);
        pop();
    }
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    
    r = 10;
    d = r*2;
    posX = random(r,windowWidth-r);
    posY = random(r,windowHeight-r);
}

function preload() {
    img = loadImage("images/sagrada.jpg");
}

function draw() {
    myImg();
    
    push();
    translate(0,-1*(height/25));    
    textFont('Source Code Pro');
    textSize(height/3);
    textAlign(CENTER);
    textStyle(BOLD);
    
    // HOUR
    var myColorH = get(width/2,height/3*2);
    fill(myColorH);
    if (hour() < 10) {
        text("0" + hour(),width/2,height/3);
    } else {text(hour(),width/2,height/3);}
        
    // SECOND
    var myColorS = get(width/2,height/3);
    fill(myColorS);
    if (second() < 10) {
        text("0" + second(),width/2,height);
    } else {text(second(),width/2,height);}
    pop();
    
    // BALL
    push();
    var myColor = get(posX,posY);
    fill(myColor);
    strokeWeight(1);
    ellipse(posX,posY,d,d);
    
    posX += incrementX;
    posY += incrementY;
    
    if (posX >= windowWidth-r || posX <= r) {
        incrementX *= -1
    } else if (posY >= windowHeight-r || posY <= r) {
        incrementY *= -1
    }
    pop();
    
    
    push();
    translate(0,-1*(height/25));    
    textFont('Source Code Pro');
    textSize(height/3);
    textAlign(CENTER);
    textStyle(BOLD);    
    
    // MINUTE
    var myColorM = get(width/2,height-1*(height/25));
    fill(myColorM);
    if (minute() < 10) {
        text("0" + minute(),width/2,height/3*2);
    } else {text(minute(),width/2,height/3*2);}
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}

function mousePressed() {
    if (state == true) {
        state=false;
    } else {
        state=true;
    }
}