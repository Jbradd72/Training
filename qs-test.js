const qs = require('querystring');

var options = {
    encodeURIComponent : function(char){return char}
}

console.log(qs.stringify(qs.parse("name=Jeff Bradley&profession=student&age=24.673"), '&', '=', options));
console.log(qs.unescape(qs.stringify(qs.parse("name=Jeff Bradley&profession=student&age=24.673"))));