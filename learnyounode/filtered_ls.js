var fs = require('fs');
var directory = process.argv[2];
var ext = process.argv[3];

fs.readdir(directory, 'utf8', function filterList(err, list) {
  if (err) {
    console.log(err);
  }

  for (var i = 0; i < list.length; i++) {
    if (list[i].search("." + ext) > 0) {
      console.log(list[i]);
    }
  }
})
