function callback (err, data) {
  if (err != true) {
    var lines = data.split('\n').length - 1;
    console.log(lines);
  }
  else {
    console.log('nay');
    return -1;
  }
}

var fs = require('fs');
var lines = fs.readFile(process.argv[2], 'utf8', callback);
