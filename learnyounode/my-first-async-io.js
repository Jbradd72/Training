var fs = require('fs')

var filename = process.argv[2];

fs.readFile(filename,function(err, data){
    if (err) throw err;

    var numLines = data.toString().split("\n").length - 1;
    console.log(numLines);
});