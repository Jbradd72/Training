var http = require('http')
       , async = require('async');

       var baseUrl = process.argv[2];
async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback){
    var body = "";
    var req = http.get(baseUrl +"/?number="+item, function(res){
                res.on('data', function(chunk){
                    body += chunk.toString();
                    });
            
                    res.on('end', function(chunk){
                        callback(null, Number(memo) + Number(body));
                    });
                }).on('error', function(e){
                    done(e);
                    });
    req.end();
}
,function done(err, result){
    if (err) return console.log(err);
     console.log(result);
});