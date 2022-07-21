const bodyParser=require("body-parser");
const express=require("express");
const request=require("request");
const app=express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/",function(req,res){
    var fname=req.body.fname;
})


app.listen(3000,function(){
    console.log("port 3000 is running")
})