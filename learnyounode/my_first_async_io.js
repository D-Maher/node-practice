var fs = require('fs');
var lines = undefined;

function getContents(newlineCount) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    lines = fileContents.toString().split('\n');
    newlineCount();
  })
};

function newlineCount() {
  console.log(lines.length - 1)
};

getContents(newlineCount);
