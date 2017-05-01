var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, fileContents) {
  if (err) {
    return console.log(err)
  }

  var lines = fileContents.toString().split('\n');
  console.log(lines.length - 1);
})


// // more concise solution:
// fs.readFile(file, 'utf8', function (err, fileContents) {
//   if (err) {
//     console.log(err);
//   }

//   console.log(fileContents.toString().split('\n').length - 1)
// })
