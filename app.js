//require express
var express = require('express');

//instatiate express app
// require('express')(); does the same thing
var app = express();

//tell express what view engine we want to use
//ejs in this case
app.set('view engine','ejs');

//get request
//express has extended the request and response
//and added additional functionality to them
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact',function(req,res){
     res.sendFile(__dirname + '/contact.html');
});

//:name is dynamic
app.get('/profile/:name', function(req, res){
   
   var data = {age:29, job:'developer', hobbies:['eating','fighting','sleeping']};
   res.render('profile', {person: req.params.name, data: data});
});

//listen on port 3000
app.listen(3000);

