var canvasWidth = 600
var canvasHeight = 400
var spriteSize = 10
var speed = 10
var appleFrequency = 10
var applePosition = []
var snakeRGB = [130,20,130]
var direction = ""
var snakeLength = 10
var beenX = [0]
var beenY = [0]
var positionX = 0
var positionY = 0
var notFailed = true
var dirChange = false
var turnCounter = 0
var startedYet = false
var growthRate = 8
var score = 0


function setup(){
    createCanvas(canvasWidth, canvasHeight)
    background(30,150,70)
    fill(snakeRGB[0],snakeRGB[1],snakeRGB[2])
    rect(positionX,positionY,spriteSize,spriteSize)
    fill(255)
}

function reduceSnakeLength(){
    while (beenX.length>snakeLength){  //reduce snake length
        beenX.splice(0,1)
        beenY.splice(0,1)
    }
}

function failManager(){
    notFailed = false
    background(150,20,20)
    var j = 0
    while (j<beenX.length){
        fill(snakeRGB[0],snakeRGB[1],snakeRGB[2])
        rect(beenX[j],beenY[j],spriteSize,spriteSize)
        fill(255)
        j++
    }
    textSize(40)
    textAlign(CENTER,CENTER)
    textStyle(BOLD)
    score = Math.floor(turnCounter/60)
    text("FAILED",canvasWidth/2,canvasHeight/2)

}

function checkFailure(){
    if (beenX.includes(positionX)){
        //Need to check this
        //console.log("already been on this X")
        var i = 0
        while (i<beenX.length){
            if(beenX[i] == positionX && beenY[i] == positionY){
                //Touch your tail
                failManager()
            }
            i++
        }
    }
    if (positionX > canvasWidth-spriteSize || positionX < 0 || positionY < 0 || positionY > canvasHeight-spriteSize){
        //OFF CANVAS!!
        failManager()
    } 
}

function drawSnake(){
    //console.log("drawSnake")
    background(80,200,40)
    var i = 0
    while (i<beenX.length){
        fill(snakeRGB[0],snakeRGB[1],snakeRGB[2])
        rect(beenX[i],beenY[i],spriteSize,spriteSize)
        fill(255)
        i++
    }
}

function getNewPosition(){
    if (direction == 'up'){
        //go up
        positionY = positionY - spriteSize
    }
    else if (direction == 'down'){
        //go down
        positionY = positionY + spriteSize
    }
    else if (direction == 'left'){
        //go left
        positionX = positionX - spriteSize
    }
    else if (direction == 'right'){
        //go right
        positionX = positionX + spriteSize
    }
}

function directionChangeManager(key){
    //console.log("DirectionChangeManager(key)")
    if (key == 'w'){
        if (direction != 'up' && direction != 'down'){
            //go up
            //background(30,150,70)
            //rect(300,10,10,10)
            return 'up'
        }
        else{
            //console.log("Direction invalid - must move 90 degrees to travel")
            return ''
        }
    }
    else if (key == 's'){
        if (direction != "up" && direction != "down"){
            //go down
            //background(30,150,70)
            //rect(300,300,10,10)
            return 'down'
        }
        else{
            //console.log("Direction invalid - must move 90 degrees to travel")
            return ''
        }
    }
    else if (key == 'a'){
        if (direction != "right" && direction != "left"){
            //go left
            //background(30,150,70)
            //rect(10,200,10,10)
            return 'left'
        }
        else{
            //console.log("Direction invalid - must move 90 degrees to travel")
            return ''
        }
    }
    else if (key == 'd'){
        if (direction != 'right' && direction != 'left'){
            //go right
            //background(30,150,70)
            //rect(500,200,10,10)
            return 'right'
        }
        else{
            //console.log("Direction invalid - must move 90 degrees to travel")
            return ''
        }
    }
}

function appleLocationChange(){
    //insert Dat Apple
    applePosition = []
}

function draw(){
    if (startedYet){
        turnCounter++
        //background(255)
        //text("turnCounter: "+turnCounter,20,40)
        if (keyIsPressed){
            //console.log("Key Pressed")
            if (key == 'r'){ //if reset
                //reset
                console.log("Reset Game")
                document.getElementById("score").innerHTML = "Score:"
                direction = ""
                snakeLength = 10
                beenX = [0]
                beenY = [0]
                appleFrequency = 10
                applePosition = []
                positionX = 0
                positionY = 0
                notFailed = true
                dirChange = false
                turnCounter = 0
                startedYet = false
                score = 0
                background(30,150,70)
                fill(snakeRGB[0],snakeRGB[1],snakeRGB[2])
                rect(positionX,positionY,spriteSize,spriteSize)
                fill(255)
            }
            else{
                //console.log("button not R")
                if (dirChange == false){
                    //console.log("Can Change Direction")
                    if (key == 'w' || key == 'a' || key == 's' || key == 'd'){
                        if (directionChangeManager(key) != ''){
                            direction = directionChangeManager(key)
                            //console.log("New Direction: "+direction)
                            dirChange = true
                        }
                        //text("direction: "+direction,20,20)
                    }
                }
            }
        }
        if (notFailed){
            if (turnCounter%speed == 1){
                if (turnCounter%(speed*growthRate) == 1){
                    snakeLength++
                }
                dirChange = false
                document.getElementById("score").innerHTML = "Score: "+Math.floor(turnCounter/60)
                reduceSnakeLength()
                getNewPosition()
                checkFailure()
                beenX.push(positionX)
                beenY.push(positionY)
                //text(notFailed,20,20)
                //text(beenX+beenY,20,60)
                if (notFailed){
                    drawSnake()
                }
            }
        }
    }
    else{
        if (keyIsPressed){
            if (key == 'd'){
                direction = 'right'
                startedYet = true
            }
        }
    }
}
    //if not failed
        //direction change
        // every 60 turns
            //calculate new position
            //dirChange = false
            //if position is in list
                //failed
            //else
                //add position to list
                //draw snake



function handleLeaderboard(){
    var valid = false
    valid = nameValidator()
    if (valid){
        var table = document.getElementById("leaderboardTable")
        var row = table.insertRow(1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        cell1.innerHTML = document.getElementById("nameInput").value
        cell2.innerHTML = score
    }
    else{
        alert("Please insert a valid name")
    }
    //text("Leaderboard sumbission: "+document.getElementById("nameInput").value,300,300)

}

function nameValidator(){
    if (document.getElementById("nameInput").value == ""){
        return false
    }
    else{
        return true
    }
}