var http = require('http');
var url = require('url');

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(time) {
  return { unixtime: time.getTime() };
}

var server = http.createServer(function (request, response) {
  if (request.method !== 'GET') {
    return response.end('Please only send GET requests\n');
  }

  var parsedUrl = url.parse(request.url, true);
  var pathname = parsedUrl.pathname;
  var query = parsedUrl.query;
  var time = new Date(query.iso);
  var result;

  if (pathname === '/api/parsetime') {
    result = parsetime(time);
  } else if (pathname === '/api/unixtime') {
    result = unixtime(time);
  }

  if (result) {
    response.writeHead(200, { 'Content_Type': 'application/json' });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(+process.argv[2]);
