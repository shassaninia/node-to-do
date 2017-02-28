var http = require('http');
var fs = require('fs');

//Create read stream to read 'readme.txt'
//Data will be read in chunks (buffered)
var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

//pipe from readable stream to a writeable stream
//can only pipe from readable streams
//This is the same as listening for the data event
myReadStream.pipe(myWriteStream);



/*
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey, this is a response from the server...');

});

server.listen(3000,'127.0.0.1');
console.log('Listening on port 3000');
*/



