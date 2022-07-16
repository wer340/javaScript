const express=require("express");
const https=require("https"); // native module of node
// const bodyParser=require("body-parser");
const app=express();


app.get("/",(req,res)=>{
    var  url="https://v2.jokeapi.dev/joke/programming"
    https.get(url,function(res){
       console.log(res.statusCode);

       res.on("data",function(data){
        console.log(data);/*expect hexadecimal data packed  Buffer 7b 0a 20 20 20 20 22 65 72 72 6f 72 22 3a 20 66 61 6c 73 65 2c 0a 20 20 20 20 22 63 61 74 65 67 6f 72 79 22 3a 20 22 50 72 6f 67 72 61 6d 6d 69 6e 67
      convert hexadecimal to text cryptii.com  >
      {
    "error": false,
    "category": "Programming */
    });  



    });

res.send("result")
});


app.listen(3000,()=>{console.log("successful initialize  port 3000")})








