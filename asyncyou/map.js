var http = require('http')
       , async = require('async');
     async.map([process.argv[2], process.argv[3]], function(url, done){
       var body = '';
       var req = http.request(url, function(res){
         res.on('data', function(chunk){
           body += chunk.toString();
         });
         res.on('end', function(){
          return done(null, body);
         });
       });
       
       req.end();
     },
     function(err, results){
       if (err) return console.log(err);
       return console.log(results);
     });