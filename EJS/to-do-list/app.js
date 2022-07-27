const express=require("express")
const bodyParser=require("body-parser")

const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
var tday=new Date();
if(tday.getDay()==4 || tday.getDay==5){
    res.send("its weekend")
}
else{
    res.send("its work day")
}
})


app.listen(3000,()=>{
    console.log("port 3000 running ...")
})