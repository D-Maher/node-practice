var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

var loud = tr.select('.loud').createStream();

var uppercaser = function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

loud.pipe(through(uppercaser)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout)
