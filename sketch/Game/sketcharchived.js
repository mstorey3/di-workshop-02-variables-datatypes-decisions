var canvasWidth = 400
var canvasHeight = 400
var spriteSize = 10
var positionX = 0
var positionY = 0
var notFailed = true
var direction = "right"
var turnCounter = 0
var beenCoords = [""]

function setup() {
  createCanvas(canvasWidth, canvasHeight)
  background(30,150,70)
  rect(positionX,positionY,spriteSize,spriteSize)
}


function draw() {
  //Has it been reset?
  if (keyIsPressed){
    if(key == 'r'){
      // RESET GAME
      background(30,150,70)
      positionX = 0
      positionY = 0
      direction = 'right'
      notFailed = true
      beenCoords = [""]
    }
  }
  if (notFailed){
    // is it my go?
    if (keyIsPressed) {
      if (key == 'w') {
        direction="up"
      }
      if (key == 'a') {
        direction="left"
      }
      if (key == 's') {
        direction="down"
      }
      if (key == 'd') {
        direction="right"
      }
    }
    if ((turnCounter%30)==0){
      //Woo my go!
      //Check if failed?
      //make move
      if (direction == "down"){
        positionY = positionY + spriteSize
      }
      else if (direction == "up"){
        positionY = positionY - spriteSize
      }
      else if (direction == "left"){
        positionX = positionX - spriteSize
      }
      else if (direction == "right"){
        positionX = positionX + spriteSize
      }
      coords = String(positionX) + String(positionY)
      if (beenCoords.includes(coords)){
        background(150,0,0)
        notFailed = false
        console.log("Failed - loool you suck")
      }
      beenCoords.push(String(positionX)+String(positionY))
      console.log(beenCoords)
      rect(positionX,positionY,spriteSize,spriteSize)


      //check move
      //print
    }
    turnCounter += 1
    if (keyIsPressed) {
      if (key == 'w') {
        direction="up"
      }
      if (key == 'a') {
        direction="left"
      }
      if (key == 's') {
        direction="down"
      }
      if (key == 'd') {
        direction="right"
      }
    }
  }
}



function binbooooo(){
  //snake
  console.log("notFailed: "+notFailed)
  
  if (notFailed){
    if (positionX <= 0 || (positionX+spriteSize)>=canvasWidth || positionY <= 0 || (positionY+spriteSize) >= canvasHeight){
      console.log("failed - off canvas")
      notFailed = false
    }
    else{
     
    }
    //ellipse(30,30,30,30)
    //if (direction=="right")
    rect(positionX,positionY,30,30)
  }
  else {
    background(150,30,30)
    notFailed = false
  }
}

function mousePressed() {
  //background(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1))
}