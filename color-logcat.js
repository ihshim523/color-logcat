var readline = require('readline');
var colors = require('colors');

var rl = readline.createInterface(process.stdin, null);
rl.on('line', function(line) {
  switch (line[0]) {
  case 'D':
    console.log(line.green);
    break;
  case 'W':
    console.log(line.yellow);
    break;
  case 'E':
    console.log(line.red);
    break;
  default:
    console.log(line);
  }
}).on('close', function() {
    process.exit(0);
});

