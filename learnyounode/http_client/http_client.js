var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
}).on('error', console.error)


// lines 5 and 6 are shorthand for:

  // response.on('data', function (data) {
  //   console.log(data);
  // });
  // response.on('error', function (error) {
  //   console.error(error);
  // });