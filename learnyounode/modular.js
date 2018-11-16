var myModule = require('./mymodule');

var path = process.argv[2];
var ext = process.argv[3];

myModule(path, ext, function(err,files){
    if(err) 
        console.log(err);
    else 
        files.forEach(function(file){
            console.log(file);
        })

});