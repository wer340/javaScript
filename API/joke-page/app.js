const express=require("express");
const bodyParser=require("body-parser")
const https=require("https"); // native module of node
// const bodyParser=require("body-parser");
const app=express();
const flagList=["Programming","Miscellaneous","Dark","Pun","Spooky","Christmas"]
var isList=0;
app.use(bodyParser.urlencoded({extended:true}));

    
    
    
    
    
    

app.get("/",(req,res)=>{

res.sendFile(__dirname+"/joke.html")
});

app.post("/",function(req,res){
 flagList.forEach((item)=>{item==req.body.cat ?  isList+=1 : isList+=0 });
        var  url="https://v2.jokeapi.dev/joke/"+req.body.cat;
        https.get(url,function(response){
           console.log(response.statusCode);//bunch
        
           response.on("data",function(data){
            const objectJoke=JSON.parse(data);
           res.write("<h1> stateCode : "+response.statusCode+"</h1>");
           res.write("<h1> category :"+objectJoke.category+"</h1>");
           res.write("<p>joke : "+objectJoke.joke+"</p>");
           res.write("<h1>error : <b>"+objectJoke.error+"</b></h1>");
           res.write("<h1>isList : <b>"+isList+"</b></h1>");
           res.send()
        });
        
        });
        
  
        
       
       
    
})


















app.listen(3000,()=>{console.log("successful initialize  port 3000")})








