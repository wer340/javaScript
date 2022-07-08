function anotherEventListener(typeOfEvent,callback){


//detect Event code ...
var eventThatHappen={
    eventType:"keypress",
    key:"p",
    durationOfKeypress:2

}
if (eventThatHappen.eventType==="keypress"){
    callback(eventThatHappen);
}


}