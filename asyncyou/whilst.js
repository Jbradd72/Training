var http = require('http')
       , async = require('async');


var count = 0;
var body = "";
async.whilst(
    function(){
        return !body.includes("meerkat")
    },
    function(callback){ 
    count++;
    var req = http.get(process.argv[2], function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
                });
        
                res.on('end', function(chunk){
                    callback(null, count);
                });
            }).on('error', function(e){
                done(e);
                });
    req.end();
    },
    function(err,n){
        if (err) 
            return console.log(n); 
        console.log(n)}

)