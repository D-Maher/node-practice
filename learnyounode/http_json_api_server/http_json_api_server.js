var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  if (request.method !== 'GET') {
    return response.end('Please only send GET requests\n')
  }

  var pathname = url.parse(request.url, true).pathname;
  var query = url.parse(request.url, true).query;
  var dateTime = new Date(query.iso);

  if (pathname === '/api/parsetime') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({
      "hour": dateTime.getHours(),
      "minute": dateTime.getMinutes(),
      "second": dateTime.getSeconds() 
    }));
  }

  if (pathname === '/api/unixtime') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ "unixtime": dateTime.getTime()
    }))
  }

})

server.listen(+process.argv[2]);
