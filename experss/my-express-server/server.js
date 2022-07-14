const express=require("express");

const app= express();
app.use(express.static('public'))
app.get("/",(request,response)=>{ //response=res  request=req
   response.send(`
   <h1>hello Scarlett gone with wind</h1>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Vivien_Leigh_Scarlet.jpg/220px-Vivien_Leigh_Scarlet.jpg"  >
   
   "<img src=".\vivien.jpg" > " this method for send html not file
   
   `);
   response.sendFile(__dirname+"/vivien.jpg")
});
app.get("/women",function(req,res){
    res.sendFile(__dirname+"/vivien.jpg")
});
app.get("/photo",function(req,res){
    res.sendFile(__dirname+"/public/photo.html")
});

app.listen(port=3000,()=>{
    console.log("server started 3000")
});
