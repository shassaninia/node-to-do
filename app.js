var fs = require('fs');

//Will not block other code
var readme = fs.readFile('readme.txt', 'utf8', function(error,data){
    console.log(data);
});

console.log('this will show before the data from the file because the file read is async')


