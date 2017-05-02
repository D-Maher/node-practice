var http = require('http');

http.get(process.argv[2], function (response) {
  var dataLength = 0;
  var dataArray = [];
  response.setEncoding('utf8');
  response.on('data', function (data) {
    dataLength += data.split('').length;
    dataArray.push(data);
  });
  response.on('end', function () {
    console.log(dataLength);
    console.log(dataArray.join(''));
  });
  response.on('error', console.error);
}).on('error', console.error);
