// A transform stream takes input data and applies an operation to the data to produce the output data.

var through = require('through2');

var transformStream = through(function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

process.stdin.pipe(transformStream).pipe(process.stdout);
