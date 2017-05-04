var through = require('through2');
var split = require('split');

var lineCounter = 1;

process.stdin.pipe(split()).pipe(through(function (line, encoding, next) {
  if (lineCounter % 2 === 0) {
    console.log(line.toString().toUpperCase());
  } else {
    console.log(line.toString().toLowerCase());
  }

  lineCounter += 1;

  next();
})).pipe(process.stdout);
