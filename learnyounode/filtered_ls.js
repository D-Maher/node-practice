var filterList = require('./my_module');

var directory = process.argv[2];
var ext = process.argv[3];

filterList(directory, ext, function(err, list) {
  if (err) return console.log(err);
  list.forEach(function(file) {
    console.log(file);
  })
});