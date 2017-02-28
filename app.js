var fs = require('fs');

//remove direcory Asynchronously (directory must exist and be empty)
fs.rmdir('stuff',function(){
    console.log('Directory removed');
});


