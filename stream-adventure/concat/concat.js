var concat = require('concat-stream');

process.stdin.pipe(concat(function (buffer) {
  var reversed = buffer.toString().split('').reverse().join('');
  console.log(reversed);
}));
