const express=require("express");



const app=express();

app.get("/",function(req,res){
res.send("index.html")//relative path   no response this situation
})




app.listen(3000,function(){
    console.log("server started 3000");
})