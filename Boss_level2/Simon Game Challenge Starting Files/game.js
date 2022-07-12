var gamePattern=[];
var buttonColours=["red", "blue", "green", "yellow"] ;
function nextSequence(){
    var randomNumber=Math.random()*4;
    randomNumber=Math.floor(randomNumber);
    return randomNumber
}
var randomChosenColour =buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
console.log(gamePattern)

$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);