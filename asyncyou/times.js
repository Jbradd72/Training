var http = require('http')
       , async = require('async');





async.series({
    requestOne: function createUsers(callback){
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
        if (err) return callback(err);
            callback(null, null);
    })},

    requestTwo: function loadUsers(callback){
        var body="";
        var req = http.get("http://" +process.argv[2] +":"+process.argv[3], function(res){
          res.on('data', function(chunk){
              body += chunk.toString();
              });
      
              res.on('end', function(chunk){
              return console.log(body);
              });
          }).on('error', function(e){
              callback(e);
        })
    
        req.end();
    
    }
}, function callback(err, bodies){
    if (err) return console.log(err);
})

