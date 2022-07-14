const bodyParser=require("body-parser");
const express=require("express");

const app=express(); //make instance

app.use(bodyParser.urlencoded({extended:true}));//extended convert object data payload network

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
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



