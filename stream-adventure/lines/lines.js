var through = require('through2');
var split = require('split');

var lineCounter = 1;

var transform = through(function (buffer, encoding, next) {
  var line = buffer.toString();
  this.push(lineCounter % 2 === 0 ? line.toUpperCase() + '\n' : line.toLowerCase() + '\n');
  lineCounter++;
  next();
})

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);
