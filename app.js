//require express
var express = require('express');

//instatiate express app
// require('express')(); does the same thing
var app = express();

//get request
//express has extended the request and response
//and added additional functionality to them
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact',function(req,res){
     res.sendFile(__dirname + '/contact.html');
});

//:id is dynamic
app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of ' + req.params.id);
});

//listen on port 3000
app.listen(3000);

