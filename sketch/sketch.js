var positionX = 0
var positionY = 0
var name = 'your name here'
var moving = true
var canvasWidth = 400
var canvasHeight = 200
var spriteWidth = 10
var spriteHeight = 10
var direction = "right"
var bounceCount = 0
var speed = 2

function setup() {
  createCanvas(canvasWidth, canvasHeight)
}


function draw() {
  background(100)
  if (moving){
    //change position
    if (direction == "right"){
      if(positionX==(canvasWidth-spriteWidth)){
        direction = "down"
        positionY += speed
        console.log('Bounced Down')
        bounceCount = bounceCount + 1
        console.log('Bounce Count '+ bounceCount)
      }
      else{
        positionX += speed
      }
    }
    if (direction == "down"){
      if(positionY==(canvasHeight-spriteHeight)){
        direction = "left"
        positionX -= speed
        console.log('Bounced left')
        bounceCount = bounceCount + 1
        console.log('Bounce Count '+ bounceCount)
      }
      else{
        positionY += speed
      }
    }
    if (direction == "left"){
      if(positionX==0){
        direction = "up"
        positionY -= speed
        console.log('Bounced Up')
        bounceCount = bounceCount + 1
        console.log('Bounce Count '+ bounceCount)
      }
      else{
        positionX -= speed
      }
    }
    if (direction == "up"){
      if(positionY==0){
        direction = "right"
        positionX += speed
        console.log('Bounced Right')
        bounceCount = bounceCount + 1
        console.log('Bounce Count '+ bounceCount)
      }
      else{
        positionY -= speed
      }
    }
    
  }
  
  rect(positionX, positionY, spriteWidth, spriteHeight)
  //text('My name is '+name, 10, 30)
  
}

function mousePressed() {
  moving = !moving
  console.log('Moving: '+moving)
}