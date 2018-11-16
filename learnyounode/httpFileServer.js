const http = require('http');
const fs = require('fs');

http.createServer((request,response) => {
    response.writeHead(200,{"Content-type" : "text/plain"})
    var stream = fs.createReadStream(process.argv[3].toString());
    stream.pipe(response);
})
.listen(Number(process.argv[2]));
