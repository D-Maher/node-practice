var filterList = require('./my_module');

var directory = process.argv[2];
var filter = process.argv[3];

filterList(directory, filter, function (err, list) { // this third argument is the 'callback' function
  if (err) return console.error('There was an error:', err); // i.e. if there is an error from the 'fs.readdir' function, immediately log an error to the console (early return)
  
  list.forEach(function (file) {
    console.log(file);
  }) // since there was no error passed to the callback function, each of the items in the filtered list are printed to the console
});