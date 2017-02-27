var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

//Anything created using Person constructor can now have a custom event attached to it.
util.inherits(Person,events.EventEmitter)

var john = new Person('john');
var jane = new Person('jane');
var doe = new Person('doe');

var people = [john,jane,doe];

//Attach a speak event to each person object
people.forEach(function(person){

    person.on('speak',function(message){
        console.log(person.name + ' said: ' + message);
    })    

});

john.emit('speak','I am john');

jane.emit('speak','I am jane');

doe.emit('speak','I am doe');