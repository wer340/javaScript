
console.log(module)


var name="scarlett Johansson ";

function sayName(){
    global.console.log(name) //into global object called global
}


module.exports.tellToMe=sayName;