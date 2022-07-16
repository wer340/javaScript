const express=require("express");
const https=require("https"); // native module of node
// const bodyParser=require("body-parser");
const app=express();


app.get("/",(req,res)=>{
    var  url="https://v2.jokeapi.dev/joke/programming"
    https.get(url,function(res){
       console.log(res.statusCode);

       res.on("data",function(data){
        console.log(data);
        const objectJoke=JSON.parse(data);
        console.log(objectJoke);
    });



    });

res.send("result")
});




















app.listen(3000,()=>{console.log("successful initialize  port 3000")})








