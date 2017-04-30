var fs = require('fs');

var contents = fs.readFileSync(process.argv[2])

var fileString = buffer.toString();

var fileStringChars = fileString.split("");

var newlineCounter = 0

for (var i = 0; i < fileStringChars.length; i++) {
  if (fileStringChars[i] === "\n") {
    newlineCounter += 1
  }
}

console.log(newlineCounter);
