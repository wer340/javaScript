# node

is envirement runtime      not  programming languge  not  framework
### By deafult Asynchron   engine v8  chrome for rander js  v8+code c++ = node    
availbe file system and network   that not availbe in chrome
![async](https://raw.githubusercontent.com/wer340/javaScript/main/node/images/async_resturant.png)

---
so we have talked about why we want to use node 
but what exactly does it do anyway?
well currently in our web sites we have written javascript code and we have
been able to execute it inside our browser nut realy important
but up untill now that javascript code has been locked behind
bars and kept inside the browser only been able to interact with browser 
request information from the browser add event listener to components in
the browser but we have not able to write javascript code for our website
thats able to go beyond the boundaries of the browser
basiclly you needs to be able to write code can interact directly with the 
computer independent of the browser and thats exactly what `node.js` allows us to
do it allows us to take javascript out of browser and it liberated it
allowing it to `interact` directly with the `hardware` of a computer
so we can now use js inside our web site in order to give it functionality and 
behavior 
for example implementing animation or dropdown menu
but node allow us to use js to interact directly with the hardware of 
the computer . so we can use it for example to create a desktop application
and in fact atom the code editor that we have been using all of this time 
is based on node js 
so now with node js you can write js code not just in browser to affect behavior
of your website but also write full application that work on your computer

---
# module
does not have window  and document object 
node work  with files with the opreating sys and network 
node we have a couple other global object 
i browser we have this window object that represent our global scope 
we can access them via this window object  `window.console.log()`
js will prefix this statement with window that console that where object is define
instead node replace window  we have global object
```js
global.console.log()
var message="SDS"
console.log(global.message)//undefined
```
the global object they are only scoped to this fire app.js  so they are `not 
availble` out side of this file and this is beacuse `node modular sys`
avoid defining var or function  in the global scope as `overwrite` on `main function` be relaible
instead in global scope we need `modularity`
`var` and `function` encapsulated inside of that module
in core of node we have this consept called module so every file in a node 
apllication is consedered a module
you want to use variable or function defined in a module outside module
you need to explicitly export it and make it public
in node every file is module  `console.log(module)`

so conclution  every `var` and `function`  defined in module scope
module scope
![module](https://raw.githubusercontent.com/wer340/javaScript/main/node/images/moduleer.png)
node pre deafult [like app.js](https://stackoverflow.com/questions/36002413/conventions-for-app-js-index-js-and-server-js-in-node-js) as main 
# debug 
`npm install -g jshint install`
#### js hint tool  for happing this wrong
run  open command line  type  `jshint name.js`
if one function 

# important
![modul](https://raw.githubusercontent.com/wer340/javaScript/main/node/images/modula.png)
