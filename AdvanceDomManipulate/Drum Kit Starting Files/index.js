
for (let i=0 ;i<document.querySelectorAll(".drum").length ; i++){
var drumButtons=document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   
    var ButtonText=this.textContent;
    console.log("tag = "+ButtonText)
    siwtcher(ButtonText);
})
var drumButtons2=document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
    siwtcher(event.key);
})
}



  







function siwtcher(key){
    switch (key ){
    case "w": 
        var sond=new Audio('sounds/tom-1.mp3');
        sond.play()
    break;
    case "a":
        var sond=new Audio('sounds/tom-2.mp3');
        sond.play()
    break;
    case "s":
        var sond=new Audio('sounds/tom-3.mp3');
        sond.play()
    break;
    case "d":
        var sond=new Audio('sounds/tom-4.mp3');
        sond.play()
    break;
    case "j":
        var sond=new Audio('sounds/snare.mp3');
        sond.play()
    break;
    case "k":
        var sond=new Audio('sounds/crash.mp3');
        sond.play()
    break;
    case "l":
        var sond=new Audio('sounds/kick-bass.mp3');
        sond.play()
    break;
    default: console.log(ButtonText);
    

}
}


document.addEventListener("keydown",function(event){
 
  
 console.log(event.key)
   
})