// function filterList() { 
// fs.readdir(directory, 'utf8', function (err, list) {
//     if (err) return console.log(err);
//     list.forEach(function(file) {
//       if (path.extname(file) === ext) {
//         console.log(file);
//       }
//     });
//   });
// };

var fs = require('fs');
var path = require('path')

function filterList(directory, filter, callback) {
  fs.readdir(directory, 'utf8', function( err, list) {
    if (err) return callback(err);
    var filteredList = [];
    list.forEach(function(file) {
      if (path.extname(file) === '.' +filter) {
        filteredList.push(file);
      }
    });
    return callback(null, filteredList);
  })
}

module.exports = filterList;