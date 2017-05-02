var fs = require('fs');
var path = require('path');

function filterList(directory, filter, callback) {
  fs.readdir(directory, 'utf8', function (err, list) {
    if (err) return callback(err);

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filter;
    })

    callback(null, list);
  })
};

module.exports = filterList;