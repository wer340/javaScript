
![codeCase](https://raw.githubusercontent.com/wer340/python-angelayu/main/day-1/image/codeCasepng.png)
--------
# java Script 🚩
java script wasnt called java script Brandan was created and called `live script` microsoft decide reverse engineer `js script` it was confusng after some year 
european standardize `ecma` script ES6 ,.. ecma `e`uropean `c`omputer `m`anufacture `a`ssouciate
|lang|  type|
|----|------|
|java|compile|
|c|compile|
|c++|compile|
|swift|compile|
|javaScript|interpater|
|python|interpater|
|Ruby|interpater|
-----
## variable let const var
+ ✔function scope  each of them Local
+ block code if for .. ✔let and const Local   ⛔but var Global   

---
##### js suporrted all major browser
inspect developer> source tab > >> button >snippp

# tyep of data 
+ string
+ number
+ boolean
+ undefined  like `var x;`
+ null
+ symbol 

```js 
var fruits="banana";
var countCar=23;
var GameOver=False;
console.log(typeof(fruits));
console.log(typeof(GameOver));
console.log("this var  of tpe is "+typeof(countCar)); /* concatination with plus sign +    */
var list=["Meryl Streep", "Ingrid Bergman", "Vivien Leigh",  "Jodie Foster", "Katharine Hepburn"] 
name.length /* 8    */
list.length /*5 */
```
# calc
```js
var number=2.34354545;
number=number.toFixed(3)
```
# loop 
```js
while(condition){  /* condition ▶5>3[True] */
Math.random();[0-0.9999999999999999] /* 16 digit */
Math.floor()
}
var list=[];
for(var i=0 */[start]*/;i<100 */[end]*/;i++ */[change]*/){
list.push(i);
list.legth /* expect 100 */
}
```
#### `===`  equal  , `!==`  not equal  , `>` greater than , `<`  lesser than , `>=` greater than and equal ,`<=` lesser and equal 
#### `&&`[ampersand] and  combine and comparitive `||` [pipe sign] or `!` [exclamition sign] not

# manipulate with js
```js
document.querySelector("#firstHeading").style.fontSize="3rem";

document.querySelector("#firstHeading").classList="infobox"; 
/* 🔼 css into css js into js html to html  principle✔🔼  */

document.querySelector("#firstHeading").textContent="General Elictric" ; 
/* 🔼only text innerHtml return taag like <em>text</em> 🔼 */

document.querySelector(".infobox-image a").getAttribute("href"); 

document.querySelector(".infobox-image a")/* 🔽  */
.setAttribute("href",'https://m.mediaY388_.jpg'); /* not run */

document.querySelector(".infobox-image a").removeAttribute("href");
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
    callback(eventThatHappen); /* eventThatHappen ~ e ~ evt ~ event */
}}

```




