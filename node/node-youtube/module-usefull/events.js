const EventEmitter=require("events")



const emitter=new EventEmitter()


emitter.on("scarlett",function(){  //alias name addlistener
    console.log("$$$$$$$$$$$$$$$$$$$$$$$")
})

emitter.emit("scarlett") // make noise  a signal for app that happen