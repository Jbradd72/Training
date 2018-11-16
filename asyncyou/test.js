var http = require('http')
       , async = require('async');

async.times(5, function(n, next){
    
    var user = JSON.stringify({"user_id": n + 1})
    
    var opts = {
        hostname: process.argv[2],
        port: process.argv[3],
        path: '/users/create/',
        method: 'POST',
        headers: {
                'Content-Type' : 'application/json',
                'Content-Length' : user.length
        }
    }
    var body = '';
    var req = http.request(opts, function(res){
        console.log(n);
        res.on('data', function(chunk){
        body += chunk.toString();
        });
        res.on('end', function(){
        return next(null, body);
        });
    });
    req.write(user);
    req.end();
    }
,
    function(err, results){
        console.log("in users");
    if (err) return console.log(err);
        console.log("done")
    });