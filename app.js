//require express
var express = require('express');

//instatiate express app
// require('express')(); does the same thing
var app = express();

//get request
//express has extended the request and response
//and added additional functionality to them
app.get('/',function(req,res){
    res.send('this is the homepage');
});

app.get('/contact',function(req,res){
    res.send('this is the contact page');
});

//listen on port 3000
app.listen(3000);

