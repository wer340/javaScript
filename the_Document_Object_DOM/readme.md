boilerplate 🔽 example foe html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
### inject css to html 💎3 ways
1️⃣ onload to html that load js inline way it s  difficult its also hard to debug
```html 
<body onload="alert('hi scarlett');">  
  <div onload="alert('hi margot');> </div>
</body>
```
  
2️⃣internal way
```html 
<script  type="text/javascript">
 /* satatement */
</script>
```

3️⃣ external way  best way ✔💎
```html 
<script src=""  charset="utf8"></script>
```
🔼js  at bottom right of bottom when elment   not seen in screen   we run `js` , and error happen beacuse `js` can not find tag  that not appear in screen  null error
### content of site  appear then js load up
# dom
Manipulate tag HTML   first inject
HTML a CSS   after user click a button changes CSS and HTML then 
reload page  if impossible, and it's a nightmare if so many people 
do same thing
`DOM` solve this issue  DOM `catalog of HTML` into individual object that we can select and manipulate 
now the task `converting` HTML file into `DOM` is done `by the browser`
when you load a web page and it what does that, it turns each of these element and their associated data into a `tree structure` with a whole
 bunch of objects you can select and manipulate tree model   with all relationship mapped on diagram
and eveything taht is contained inside your `html document` is contained in a n `object` **called** `document` 

-----
documet▶HTML
HTML▶head
HTML▶body
✔ documet▶HTML▶head

-----
# [HTML Tree Generator](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg/related) plugin  chrome

### inside dom  can have  🌿property and 🌿method  
property  describe about object and method are thing  that the object can do each lang have this concept like [python](https://github.com/wer340/python-angelayu/tree/main/day-17)

 property  with dot see property  car example door `seat`[has]  method drive `brake`[does] ..
 ```js
 car.numbersDoor; /*expext number */
 car.numbersDoor=2 /* also set property */
 
when call `method` like drive on car 
 ```js
 car.drive();
 ```
button property of button include inner html style firsyChild
`methods` of button  `click()` `appendChild()` `setAttribute()` method a function can do all have  you needed
▶ selector into css ✔✔ 
```css
.item {} 
#portfolio{}
h1{}
h1.item{} /* ## combining selector   */
```


