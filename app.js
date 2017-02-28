var http = require('http');
var fs = require('fs');

//Create read stream to read 'readme.txt'
//Data will be read in chunks (buffered)
var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

//data event is fired when our buffer is full
myReadStream.on('data',function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});



/*
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey, this is a response from the server...');

});

server.listen(3000,'127.0.0.1');
console.log('Listening on port 3000');
*/



