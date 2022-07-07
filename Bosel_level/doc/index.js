
document.querySelector("h1").addEventListener("click",handle)
function randNumber(){
    n=Math.random()*6;
    n=Math.floor(n)+1;
    return n;
}
function winDraw(dice1,dice2){
    if(dice1>dice2){
        document.querySelector("h1").textContent="Player 1 win! 🚩"  
    }
    else if(dice1<dice2) {
        document.querySelector("h1").textContent="Player 2 win! 🚩"    
    }
    else{

        document.querySelector("h1").textContent="Draw"
    }

}
function handle(){
    var chanceDice1=randNumber()
    var chanceDice2=randNumber()
    winDraw(chanceDice1,chanceDice2)
    var dice1=document.querySelector(".photo1 img");
    var dice2=document.querySelector(".photo2 img");
    console.log(dice2 )
    dice1.setAttribute("src",'images/dice'+chanceDice1+'.png')
    dice2.setAttribute("src",'images/dice'+chanceDice2+'.png')
    

}

