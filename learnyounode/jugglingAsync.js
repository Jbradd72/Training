const http = require('http');

var urls = process.argv.splice(2);

http.get(urls[0], function(res){
    var body = "";
    res.on("data", (chunk) => body += chunk);
    res.on("end", function(){
        console.log(body); 
        http.get(urls[1], function(res){
            var body = "";
            res.on("data", (chunk) => body += chunk);
            res.on("end", function(){
                console.log(body); 
                http.get(urls[2], function(res){
                    var body = "";
                    res.on("data", (chunk) => body += chunk);
                    res.on("end", function(){
                        console.log(body); 
                    });
                })
            });
        })
    });
})