var fs = require('fs');

//Will not block other code
var readme = fs.readFile('readme.txt', 'utf8', function(error,data){
    fs.writeFile('writeme.txt', data);
});



