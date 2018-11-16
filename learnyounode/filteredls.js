var fs = require('fs');
var p = require('path');

var path = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(path, function(err, files){
    var myFiles = files.filter((file) => p.extname(file) == ext);

    myFiles.forEach(function(file){
        console.log(file);
    });
});