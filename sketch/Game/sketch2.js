var canvasWidth = 400
var canvasHeight = 400
var spriteSize = 10
var positionX = 0
var positionY = 0
var notFailed = true
var direction = ""
var beenCoords = []

//rect(positionX,positionY,spriteSize,spriteSize)
//if (keyIsPressed){
//    if(key == 'r'){

function setup() {
  createCanvas(canvasWidth, canvasHeight)
  background(30,150,70)
}

function directionChange(key){
    var newDirection = ""
    if (key == 'w'){
        if (direction == 'right' || direction == 'left'){
            //go up
            newDirection = "up"
        }
    }
    else if (key == 's'){
        if (direction == 'right' || direction == 'left'){
            //go down
            newDirection = "down"
        }
    }
    else if (key == 'a'){
        if (direction == 'up' || direction == 'down'){
            //go left
            newDirection = "left"
        }
    }
    else if (key == 'd'){
        if (direction == 'up' || direction == 'down'){
            //go right
            newDirection = "right"
        }
    }
    return newDirection
}

function draw() {
    //check if restarted
    if (keyIsPressed){
        if (key == 'r'){
            //restart game
        }
    }       
    if (notFailed){ //if not failed
        if (keyIsPressed){  //check if changed direction
            direction = directionChange(key)
        }
    }
    console.log(key+direction)
    //make move
    //check if failed
        //off canvas
        //already been
}






function mousePressed() {
  //background(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1))
}