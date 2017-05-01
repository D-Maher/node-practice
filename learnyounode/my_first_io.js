var fs = require('fs');

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n')

console.log(lines.length - 1);


// even shorter solution:
// var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// console.log(lines);