var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(directory, 'utf8', function (err, list) {
  if (err) return console.log(err);

  list.forEach(function (file) {
    if (path.extname(file) === filter) {
      console.log(file);
    }
  });
});
