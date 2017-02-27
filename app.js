var events = require('events');

//create a custom event emitter
var myEmitter = new events.EventEmitter();

//Listen for 'someEvent'
myEmitter.on('someEvent', function(message){
    console.log(message);
});

//Manually emit 'someEvent' with the data as the second parameter
myEmitter.emit('someEvent','the event was emitted');