var fs = require('fs');
var p = require('path');

module.exports = function(folder, ext, callback){

    fs.readdir(folder, function(err, files){
        if(err) return callback(err);
        var myFiles = files.filter((file) => p.extname(file) == '.' + ext);
    
        return callback(null, myFiles);
    });
}