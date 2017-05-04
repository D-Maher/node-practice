// A transform stream takes input data and applies an operation to the data to produce the output data.

var through = require('through2');

var transformStream = through(write, end); // creates a through stream

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase()); // produces output data
  next(); // receives the next chunk of data
}

function end(done) { // this is optional
  done();
}

process.stdin.pipe(transformStream).pipe(process.stdout);
