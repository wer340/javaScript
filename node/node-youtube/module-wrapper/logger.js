// (function (exports, require, module, __filename, __dirname) { 
console.log(__filename)
console.log(__dirname)
var url="http://mylogger.io"
function log(message){
    //http request
    console.log(message)
}


module.exports=log
// module.exports.log=log
// exports.log=log
// exports=log    exports ~ module.exports
// })