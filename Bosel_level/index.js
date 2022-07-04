document.querySelector("h1").addEventListener("click",addPic)
NAME=["aniston","robbie","audrey","clake","scarlett","lawrence"];

function addPic (){
elemnt= document.querySelector("img");
if (elemnt.hasAttribute("src")){
    elemnt.removeAttribute("src");
}
else{
    
    console.log("dont have src")
var n=Math.random();
n=n*6;
n=Math.floor(n);
elemnt.setAttribute("src",'image/'+NAME[n]+'.jpg');
}
}