const express=require("express")
const bodyParser=require("body-parser")

const app=express()
app.set("view engine",'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tday=new Date();
var day =""
if(tday.getDay()==4 || tday.getDay==5){
   day="weekend";
}
else{
    day="worked"
}

console.log(days[5])
res.render("list",{thisDay:day , nameDay:days[5]})
})


app.listen(3000,()=>{
    console.log("port 3000 running ...")
})