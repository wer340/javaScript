const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    console.log(__dirname)
    // var path=path.join()
res.sendFile(__dirname+"/index.html")//relative path   no response this situation
})

app.post("/",function(req,res){
    console.log(req.body.num1);
    var num1=req.body.num1;
    var num2=req.body.num2;
    res.send("<h1>result : </h1>["+typeof(num1)+"]"+num1*num2) //message back  404 >200  successfully
})



app.listen(3000,function(){
    console.log("server started 3000");
})