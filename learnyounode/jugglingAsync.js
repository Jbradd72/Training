const http = require('http');

var urls = process.argv.splice(2);

/*http.get(urls[0], function(res){
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
})*/


function getContent(url){
    return new Promise((resolve, reject)=>{
        var body = '';
        var req = http.get(url, function(res){
            res.on('data', (chunk)=> body += chunk);
            res.on('end', function(){
                console.log(body);
                resolve();
            })
        }).on('error', (err)=>reject(err));
    })
}

getContent(urls[0])
    .then(()=>getContent(urls[1]))
    .then(()=>getContent(urls[2]))
    .catch((err)=>console.log(err));