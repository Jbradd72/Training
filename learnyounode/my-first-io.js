var fs = require('fs')

var filename = process.argv[2];

var text = fs.readFileSync(filename, "utf-8");
var numLines = text.split("\n") - 1;
console.log(numLines);