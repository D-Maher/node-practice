var net = require('net');

function zeroPad(n) {
  return n < 10 ? '0' + n : n;
}

var date = new Date();
var year = date.getFullYear();
var month = zeroPad(date.getMonth() + 1);
var day = zeroPad(date.getDate());
var hour = zeroPad(date.getHours());
var minute = zeroPad(date.getMinutes());

var dateTimeString = year + "-" + month + "-" + day + " "
 + hour + ":" + minute

var server = net.createServer(function (socket) {
  socket.end(dateTimeString + "\n");
});

server.listen(process.argv[2]);
