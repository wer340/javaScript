const express=require("express");
const path=require("path")


const app=express();

app.get("/",function(req,res){
    console.log(__dirname)
    // var pathe=path.join()
res.sendFile(__dirname+"/index.html")//relative path   no response this situation
})

app.post("/",function(req,res){
    res.send("<h1>Thanks</h1>") //message back  404 >200  sucessfull
})



app.listen(3000,function(){
    console.log("server started 3000");
})