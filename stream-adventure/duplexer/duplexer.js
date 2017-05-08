var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
  var spawnedProcess = spawn(cmd, args); // spawns a process from a command and some arguments
  return duplexer(spawnedProcess.stdin, spawnedProcess.stdout); // returns a single duplex stream joining the stdin and stdout of the spawned process above
};
