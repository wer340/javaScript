const http=require("http")


const server=http.createServer((req,res)=>{
    if(req.url=="/") {
        res.write("<h1>My world</h1>")
        res.end()
    }
})



server.listen(3000,()=>{ //emit
    console.log("listing port 3000 ...")
})

