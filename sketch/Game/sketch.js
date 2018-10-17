var canvasWidth = 600
var canvasHeight = 400
var spriteSize = 10
var positionX = 0
var positionY = 0
var notFailed = true
var direction = ""
var beenCoords = []
var speed = 10

//rect(positionX,positionY,spriteSize,spriteSize)
//if (keyIsPressed){
//    if(key == 'r'){

function setup() {
  createCanvas(canvasWidth, canvasHeight)
  background(30,150,70)
}


function draw() {
    //check if restarted
    if (keyIsPressed){
        if (key == 'r'){
            //restart game
            background(30,150,70)
            positionX = 0
            positionY = 0
            notFailed = true
            direction = ""
            beenCoords = []
            console.log("Game Reset")
        }
    }       
    if (notFailed){ //if not failed
        if (keyIsPressed){  //check if changed direction
          if (key == 'w'){
            if (direction != 'up' && direction != 'down'){
                //go up
                direction = 'up'
            }
          }
          else if (key == 's'){
              if (direction != "up" && direction != "down"){
                  //go down
                  direction = "down"
              }
          }
          else if (key == 'a'){
              if (direction != "right" && direction != "left"){
                  //go left
                  direction = "left"
              }
          }
          else if (key == 'd'){
              if (direction != 'right' && direction != 'left'){
                  //go right
                  console.log("Rightttt")
                  direction = "right"
              }
          }
          console.log("Direction: "+direction)
        }
    
    //What is the new coordinate?
    if (direction=="up"){
      //go up
      positionY = positionY - speed
    }
    else if (direction == "down"){
      //go down
      positionY = positionY + speed
    }
    else if (direction == "left"){
      //go left
      positionX = positionX - speed
    }
    else if (direction == "right"){
      //go right
      positionX = positionX + speed
    }
    //is it off canvas?
    if (positionX < 0 || (positionX+10)>canvasWidth  || positionY < 0 || (positionY+10)>canvasHeight){
      background(150,0,0)
      notFailed = false
      console.log("You lost - off canvas")
    }
  }
    //positionY = positionY + speed
    rect(positionX,positionY,spriteSize,spriteSize)
    // is the x coord in the thing?
        //yes - check list.shift() removes first element
        // list.push("element")
    //make changes to list
    //make move
    //check if failed
        //off canvas
        //already been
}






function mousePressed() {
  //background(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1))
}