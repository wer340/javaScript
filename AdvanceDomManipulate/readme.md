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

![high function](https://raw.githubusercontent.com/wer340/javaScript/main/AdvanceDomManipulate/listener.png)
High order function , are function that can take other function `as input`
this feature available in a number of modern languages like `javscript` pascal
swift java ruby python haskell c++ php c# Go .. but its not universal
its not available in all programming languages

-----------
important  
which button click  among many button  have addEventListner
we can figure out  idintiy of the button the trigger event by something 
just called ## this#####and this it basicly idntity of the button that
trigger eventListner 

--
In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.

---
java Script object  
dominating the web one object at a time
object similar table  same dicitonary  in python

has property of object with dot
this way fraustrating if want many object 
function nmae(a,b,c){
this.age=a
this.name=b
this.movie=c
}
initila object
var scarlett =new name(45,scarlett,avenger)

drive: function(){}
} 
method in object

event mdn
https://developer.mozilla.org/en-US/docs/Web/events
#### important
remember how said that when we addeventlistener to an Element  then
once thing event happen the Element will trigger the function
thats is second prameter so in this case when keypress detected trigger
the function thats tell the browser to show  know when that function 
get trigger? this also the another option the passing prameter and we
allows to do its let happen the event that trigger that event listenier
addEventListener (data , data)  ~ (which tag is clicked ,which key press) way of action and reaction

 that javsScript allow use `high order` function`input paramete is function`
 ![callback](https://raw.githubusercontent.com/wer340/javaScript/main/AdvanceDomManipulate/listiner.png)
#### undrestading callpack~reply
addEventListener is a `higher order function` as it take the [redpondToKey function] as a input 
what about the other side ? what about the function that` gets passed `
in as an input 
+ well this is actually called a callback function because it allows us 
to wait **for something to finish happning**
for  example waiting for a click event  and then the callback function get called back excuted 
 so previously when our button detects a click it calls the callback function
and in this case when the document or the entire web page detects a key press
then the document will call this function [respondToKey] function
 now when that happen we can get it to send us some inforamation
that it will only know once the event happen namely say wich button
was clicked which keyboad was pressed

----
#### slightly crazy part is that this callback function is not called by us  but its called by the object  that experienced the click



