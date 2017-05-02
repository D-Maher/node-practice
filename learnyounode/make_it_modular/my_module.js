var fs = require('fs');
var path = require('path');

function filterList(directory, filter, callback) {
  fs.readdir(directory, 'utf8', function (err, list) {
    if (err) return callback(err); // if there is an error from 'fs.readdir', the callback function is immediately executed with an error passed to it (early return) (go to line 7 in filtered_ls.js)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filter;
    }) // if no error from 'fs.readdir', filter the list of files in the directory down to only those that contain the filter string passed in

    callback(null, list); // lastly, the callback function is executed with no error and with the filtered list passed in (go to line 9 in filtered_ls.js)
  })
};

module.exports = filterList;