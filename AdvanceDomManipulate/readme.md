# debugger 🦟🕷
[type keyword]debugger;  then hold down shift+enter then type function then enter key
inspect ▶ console 
```js
debugger; // shift + enter ▶ next line
function add(n1,n2){
    return n1+n2;
}
add(12,34);
```

#  addEventListener
######  a simulation of  mechanism  of  addEventListener function 
```js
function anotherEventListener(typeOfEvent,callback){
//detect Event code ...

var eventThatHappen={
    eventType:"keypress",
    key:"p",
    durationOfKeypress:2
}
if (eventThatHappen.eventType==="keypress"){
    callback(eventThatHappen);
}}

```

High order function , are function that can take other function `as input`
this feature available in a number of modern languages like `javscript` pascal
swift java ruby python haskell c++ php c# Go .. but its not universal
its not available in all programming languages

-----------
 ![callback](https://raw.githubusercontent.com/wer340/javaScript/main/AdvanceDomManipulate/listiner.png)
important  
which button click  among many button  have addEventListner
we can figure out  idintiy of the button the trigger event by something 
just called `this`and this it basicly idntity of the button that
trigger eventListner 

--
In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.

---
### java Script object  
dominating the web one object at a time object similar table  same dicitonary  in python
has property of object with dot 

```js
var actress={
    name:"Scarlett johansson", // property
    age:44, // property
    move:"Avanger",  // property
    oscar:true,  // property
    moviePlay:function(){  // method
    //  statement
    }    
}
var name=actress.name;  //call property 
var result =actress.play();//call method 
```
this way frustrating if want many object  whats do you do?☹
### constructor 🌿  
+ `new` keyword for make a new object ✔
```js 
function acter (name ,age ,movie,oscar){
    this.name=name;
    this.age=age;
    this.movies=movie;
    this.oscars=oscar;
}
var scarlett=new acter("scarlett",45,"avenger",true);
var margot= new acter("robbie",36,"wolf of wall street",false);

console.log(margot);
```

---

[event mdn](https://developer.mozilla.org/en-US/docs/Web/events)
#### important
remember how said that when we addeventlistener to an Element  then once thing event happen the Element will trigger the function
thats is second parameter so in this case when keypress detected trigger the function thats tell the browser to show  know when that function 
get trigger? this also the another option the passing prameter and we allows to do its let happen the event that trigger that event listenier

-----
addEventListener (data , data)  ~ (which tag is clicked ,which key pressed ) [ action and reaction]
```js
var drumButtons=document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   
    var ButtonText=this.textContent;
    console.log(ButtonText)    });
//  1️⃣this   2️⃣event ~ e ~ evt     
var drumButtons2=document.addEventListener("keydown",function(event){
    var keyword=event.key;
    console.log(event.key) 
      });
```
-----

 ![high function](https://raw.githubusercontent.com/wer340/javaScript/main/AdvanceDomManipulate/listener.png)
 
 that javsScript allow use `high order` function`input paramete is function`
## undrestading `callpack`~reply
addEventListener is a `higher order function` as it take the [redpondToKey function] as a input 

---
what about the other side ? what about the function that` gets passed ` in as an input well this is actually **called a callback** function
 because it allows us  to wait **for something to finish happning**

---
 
for  example waiting for a click event  and then the callback function get called back excuted 
 so previously when our button detects a click it calls the callback function
and in this case when the document or the entire web page detects a key press
then the document will call this function [respondToKey] function
 now when that happen we can get it to send us some inforamation
that it will only know once the event happen namely say wich button
was clicked which keyboad was pressed

----
#### slightly crazy part is that this callback function is not called by us  but its called by the object  that experienced the click



