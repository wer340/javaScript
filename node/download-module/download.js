const fs =require("fs");
const https=require("https");
url="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg";

var scar=fs.createWriteStream("scarlett.jpg");
https.get(url,function(res){
  res.pipe(scar);
   scar.on("finish",()=>{
    scar.close();
    console.log("whats beauty photo  you downloaded it!")
   });

})
