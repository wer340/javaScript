and this is pure javascript and its actually a little bit crazy if you
really think about it in order to do something relatively simple
why does it require so many line of code 
and who s going to take care of all our joint pain from all this typing?
this is `john resig`   had created jquery lib

```js
jQuery("h1");
$("h1");
document.querySelector("h1");
```
[CDN jQuery ](https://developers.google.com/speed/libraries#jquer)
 
####  ready method  insurance way  notice  js select element  so first element and css and lib load then type coustomize code
```js
$(document).ready(function(){
    $("h1").css("color","red")
    
 ```
 
 
 ---
` $("") ` select 1  also select many  `querySelectorAll` and `querySelector`

## impotant method  
```js

 $("h1").css("color","red")
 $("h1").addClass("title-js color") // seprate behavior css js html  
console.log($("h1").css("fontSize")) // expect value of property
console.log($("h1").hasClass("color")) // expect value of property
$("button").text("Click Scarlett") // select all button change all text thats selected
$(".photo").html('<img src="asset/3.jpg" alt="">'); //add photo 
$($("button")[1]).html("<em>scarlett Johansson</em>") // select single element of them 
console.log($("img").attr("src")); //property show  ~  getAttribute 
$("img").attr("height","200px")  // set attribute this way wrong  because seprate behavior css js html
$($("button")[3]).click(function(){  // addEventListener   ~ important
    $(".photo").toggle(
        (e)=>{$(".photo").append('<img src="asset/2.jpg" height="200px" alt="">');
        console.log(e)
        $(this).removeClass();  //select tag and remove class  ~ important
    }
    ); 
});
var char=""
$("input").keypress(function(e){
   char +=(e.key);
    console.log(e.key)
    $(".banner").html( // inside html exist a <div class="banner"  >>
        '<h1>'+char+'</h1>'
    );
})
```
### example usage jquery
# pure javaScript
```js
for (var i=0; i<document.querySelectorAll("p").length;i++){
    document.querySelectorAll("button").addEventListener("click",function(e){
document.querySelector("h1").style.color="red"
    }}
    
   ```
   # vs
   
   ```js
   $("p").click(function(){
   $("h1").css("color","red")
   })
   ```
   
   # [animate jquery](https://www.w3schools.com/jquery/jquery_ref_effects.asp)
   
  ------
  
  ```html
<outside[first]><div class="wrap">inside[first] etc ......... inside[last]</div><outside[last]>
 
 ```
method|inside or outside tag| first or last of tag|
------|----------------------|--------------------|
before()|outside |first|
after() | outside| last|
prepend()| inside | first|
append()|inside | last|

   
