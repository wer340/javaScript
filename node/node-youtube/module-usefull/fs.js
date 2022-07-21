const fs=require("fs")


var resultSync=fs.readdirSync("./");

var resultAsync=fs.readdir("./",function(err,file){
    if(err) console.log(`
    ##################
    error : ${err}
    ##################
    `)
    else console.log(`
    ##################
    file : ${file}
    ##################
    `)
})
console.log(`
******************************
*
* Async: ${resultAsync}       
*                              
******************************
* Sync : ${resultSync}       
*                              
******************************

`)