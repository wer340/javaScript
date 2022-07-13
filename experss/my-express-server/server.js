const express=require("express");

const app= express();
app.get("/",(request,response)=>{
   response.send("hello")
})
app.listen(port=3000,()=>{
    console.log("server started 3000")
});