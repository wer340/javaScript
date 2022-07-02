
function rightSide(){
putBeeper();
move();
move();
putBeeper();
move();
move();
putBeeper();
}
function turnLeftSide(){
    turnLeft()
    move()
    turnLeft()
}

function leftSide(){
move()
putBeeper();
move();
move();
putBeeper();
move();
}
function turnRightSide(){
    turnRight()
    move();
    turnRight();
}
rightSide();
turnLeftSide();
leftSide();
turnRightSide();
rightSide();
turnLeftSide();
leftSide();
turnRightSide();
rightSide();