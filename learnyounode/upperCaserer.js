const http = require('http');
const fs = require('fs');
var map = require('through2-map');

http.createServer((request,response) => {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
      })).pipe(response)
})
.listen(Number(process.argv[2]));
