var fs = require('fs');

//Read file synchronously, this will read entire file before running more code
//first parameter is file to read, second is character encoding of file
var readme = fs.readFileSync('readme.txt', 'utf8');

fs.writeFileSync('writeme.txt', readme);

