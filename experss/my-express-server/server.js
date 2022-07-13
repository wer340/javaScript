const express=require("express");

const app= express();
app.get("/",(request,response)=>{ //response=res  request=req
   response.send(`
   <h1>hello Scarlett gone with wind</h1>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Vivien_Leigh_Scarlet.jpg/220px-Vivien_Leigh_Scarlet.jpg"  >
   
   <img src=".\vivien.jpg" >
   
   `)
})
app.listen(port=3000,()=>{
    console.log("server started 3000")
});