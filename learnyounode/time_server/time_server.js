var net = require('net');

function zeroPad(n) {
  return n < 10 ? '0' + n : n;
}

function now() {
  var d = new Date();
  return d.getFullYear() + '-' +
    zeroPad(d.getMonth() + 1) + '-' +
    zeroPad(d.getDate()) + ' ' +
    zeroPad(d.getHours()) + ':' +
    zeroPad(d.getMinutes()) 
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n');
});

server.listen(+process.argv[2]);
