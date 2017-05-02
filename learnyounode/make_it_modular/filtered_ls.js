var filterList = require('./my_module');

var directory = process.argv[2];
var filter = process.argv[3];

filterList(directory, filter, function (err, list) {
  if (err) return console.error('There was an error:', err);
  
  list.forEach(function (file) {
    console.log(file);
  })
});