const express=require("express");
const https=require("https"); // native module of node
// const bodyParser=require("body-parser");
const app=express();


app.get("/",(req,res)=>{
    var  url="https://v2.jokeapi.dev/joke/programming"
    https.get(url,function(response){
       console.log(response.statusCode);

       response.on("data",function(data){
        const objectJoke=JSON.parse(data);
       res.write("<h1> stateCode : "+response.statusCode+"</h1>");
       res.write("<h1>"+objectJoke.category+"</h1>");
       res.write("<h4>"+objectJoke.joke+"</h4>");
       res.write("<h1><b>"+objectJoke.error+"</b></h1>");
       res.send()
    });



    });


});




















app.listen(3000,()=>{console.log("successful initialize  port 3000")})








