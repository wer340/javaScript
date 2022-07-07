# dice gaame 

[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)    two  parameter 


#### addEventListener("click", addPic()) if  addpic() have `prantess  inside parameter of addEventListener   immeditaly run  means `dont wait` for click event and before event after read by interpreter run
```js
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
```
# Return Array  or individual  by Query
```js
var name=document.querySelector("a");/* dont array data type */
var list=document.querySelectorAll("a");/* array data type */
document.querySelectorAll("a")[1] /* one item of array */
```
this element select  one item   it doesnt a list array data type   if exist many ancher [<a>] tag  queryselector pickup first of one of them 
but querySelectorAll   return a array data type   if  exist one ancher tag  still return array
