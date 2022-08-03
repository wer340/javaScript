const express=require("express")
const bodyParser=require("body-parser")

const app=express()
app.use(express.static("public"))
app.set("view engine",'ejs')
app.use(bodyParser.urlencoded({extended:true}))
const item=[]
app.get("/",(req,res)=>{
var tday=new Date();
var option={
    year:"numeric",
    month:"long",
    day:"numeric",
    weekday:"long"
}
var day=tday.toLocaleDateString("en-US",option)
console.log(typeof(day))
res.render("list",{thisDay:day})
})

app.get("/imdb/",(req,res)=>{


   res.render("form",{listActer:item})
})
app.post("/imdb/",(req,res)=>{

    item.push(req.body.acter)
    res.redirect("/imdb/")
})




app.listen(3000,()=>{
    console.log("port 3000 running ...")
})