
document.querySelector("h1").addEventListener("click",handle)
function randNumber(){
    n=Math.random()*6;
    n=Math.floor(n)+1;
    return n;
}
function handle(){
 
   
    var dice1=document.querySelector(".photo1 img");
    var dice2=document.querySelector(".photo2 img");
    console.log(dice2 )
    dice1.setAttribute("src",'images/dice'+randNumber()+'.png')
    dice2.setAttribute("src",'images/dice'+randNumber()+'.png')


}