var gamePattern=[];
var userClickedPattern=[];
level=0
var buttonColours=["red", "blue", "green", "yellow"] ;
function nextSequence(){
    var randomNumber=Math.random()*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColour =buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

// console.log("gamePattern="+gamePattern)


$(".btn").click(function(){
    // console.log(this.id)
    if(this.id==gamePattern[level]){
        var audio = new Audio('sounds/'+this.id+'.mp3');
        audio.play();
        nextSequence();
        level++;
        $("#level-title").text("Level "+level)
    }else{
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
    }
    

})

    $(".btn").click(function(){
        var userChosenColour =this.id;
        userClickedPattern.push(userChosenColour);
        console.log("userPattern="+userClickedPattern)
    })
    $(".btn").click(function(){
            
            $(this).addClass("pressed");
      setTimeout(function(){
        $(".pressed").removeClass("pressed")

      },100)

    });
    $(document).keypress(function(e){
        if(e.key=="a"){
            nextSequence();
            $("#level-title").text("Level "+level)
        }
        
    });