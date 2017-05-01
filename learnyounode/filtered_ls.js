var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(directory, 'utf8', function filterList(err, list) {
  if (err) return console.log(err);
  list.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
