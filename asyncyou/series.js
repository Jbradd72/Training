var http = require('http'), 
    async = require('async');

async.series({
    requestOne: function(done){
        var body = "";
        http.get(process.argv[2].toString().trimRight(), function(res){
            res.on('data', function(chunk){
            body += chunk.toString();
            });
    
            res.on('end', function(chunk){
            done(null, body);
            });
        }).on('error', function(e){
            done(e);
        });
    },
    requestTwo: function(done){
        var body = "";
        http.get(process.argv[3].toString().trimRight(), function(res){
            res.on('data', function(chunk){
            body += chunk.toString();
            });
    
            res.on('end', function(chunk){
            done(null, body);
            });
        }).on('error', function(e){
            done(e);
        });
    }
  }, function imDone(err, bodies){
    if (err) return console.error(err);
    console.log(bodies);
});
