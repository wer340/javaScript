const os=require("os")


var freeMemory=os.freemem();
var totalMemory=os.totalmem();

console.log(`
freeMemory :  ${freeMemory}   and  totalMemory : ${totalMemory}


`)