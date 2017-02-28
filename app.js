var fs = require('fs');

//create direcory Asynchronously
fs.mkdir('stuff', function(){
    fs.readFile('readme.txt','utf8',function(error,data){
        fs.writeFile('./stuff/writeme.txt',data);
    })
});



