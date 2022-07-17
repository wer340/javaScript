# express  framework nodejs




```js
const bodyParser=require("body-parser"); //for parse request http 
const express=require("express");
app.use(express.static('public')); // read  static adress js css html  inside public folder can add another folder by the way
const app=express(); //make instance
app.use(bodyParser.urlencoded({extended:true}));//extended convert object data payload network    url json text
app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html"); // __dirname  server find folder place 
})
app.post("/",function(req,res){
    var num1=req.body.weight;
    var num2=req.body.height;
    num1=Number(num1);
    num2=Number(num2)
    var result=num1/(num2/100)**2;
    result=result.toFixed(3)//return -> round to 3 decimal points
    res.send("<h1>BMI : "+result+"</h1>")
})
app.listen(3000,function(){ //make a port similar radio station so that can do res,req
    console.log("server started 3000");
})

```

-----
so this `/` just represents `localhost:3000/`,which is the root or the home page
`app.get`
and this is a method thats provided by express that allow us to specify
what should happen when a browser gets in touch with our server a get request
first parameter it takes is  the location of the get request
parameter  callback  get > `res`ponse `req`uest.
now in the process of building this we are going to get to create our very 
first web appliction and its not just a web site anymore up till now 
we have only been making essentially static website right where our 
browser will make a to request to the server and the server sends back
css html js  file and if there is any js code that needs to be run 
it gets run on the client side basically our user browser and that js gets sents 
to the browser and run when the user load up website
in this lesson we are going to be making our code run `server side`
so when our web site makes a request to our server  its going to excute the code
and only deliver the outcome back to the user doesnt get to see any of code
and logic of our calculator
user doesnt get to see any of code and logic of our calculator
it s all done on a server   [senFile()](https://expressjs.com/en/4x/api.html#res.sendFile)
`get("/"(req,res)=>{res.sendFile("index.html")}`
location of file

------
![cloud](https://raw.githubusercontent.com/wer340/javaScript/main/experss/images/clouds.png)
----

now what we have been working with so far what are called relative file path
so we can simply  say `index.html` and it will go and search within the current
file s location so `calculator.js` and look for something called `index.html`
now this works a little bit `differebtly` when you have a `server` because 
your server at the moment even though its hosted on our own computer
and we know exactly where this calculator project folder reside it s basicly
on our desktop but in  the future when we deploy our server into the cloud
or somebody else computer then we have `no idea` what is that location 
so instead of just `sending a relative file path` what we can do is we can use
a constant thats called` \__dirname `or directory name
if `console.log(\__dirname)` full path  give fille file path of the current folder
current file loacation
`/users/namepc/...`

--------------------
# 404 Error briefly
alot of company and website pride themselves on how thwy design their 
404 site and that just goes to show how often this happen
now  if you interested in a redacted but slightly rude version of how http
return codes work then its  basically if its in the `100s` it mean `hold on` 
something going to happen the `200s` mean here you go this is usually a
`successful` request `300s` mean `go away` there s some security involved `400s`
mean `you scewed up` `500s` mean `i screwed up`


## package npm [nodemon] (https://nodemon.io/)
Automatic restarting of application  replace contiuosly     cterl+c and node server.js   

## package npm [body-parser] (https://www.npmjs.com/package/body-parser)
##### body-parser allow  looks through the body of post request and fetch the data based on the name of my input which is called a name

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

![express](https://raw.githubusercontent.com/wer340/javaScript/main/experss/images/express.png)
