var http = require('http');
var through = require('through2');

var server = http.createServer(function (request, response) {
  if (request.method === 'POST') {
    request.pipe(uppercaser).pipe(response)
  }
});

var uppercaser = through(function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
})

server.listen(+process.argv[2]);
