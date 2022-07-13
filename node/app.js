const fs =require("fs");



fs.copyFile("index.js","vd.js",callback)

function callback(err) {
    console.log(err);
    if (err) throw err +"ERRRRRRRRRRRRRRRRRRRRRRR";
    console.log('source.txt was copied to destination.txt');
  }