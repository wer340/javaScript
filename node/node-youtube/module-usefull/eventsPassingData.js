const EventEmitter=require("events")



const emitter=new EventEmitter()


emitter.on("scarlett",function(arg){  //alias name addlistener
    console.log("$$$$$$$$$$$$$$$$$$$$$$$"+arg.name)
})

emitter.emit("scarlett",{name:"scarlett " ,lname:"johansson" ,age:"45"}) // make noise  a signal for app that happen