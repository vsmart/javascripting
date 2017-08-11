var listFiles = require('./program5');
var dir = process.argv[2];
var extension = '.' + process.argv[3];

listFiles(dir, extension,
    function(err, data) {
      if (err) console.log(err);
      else {
        for ( var i = 0; i < data.length; i++) {
          console.log(data[i]);
        }
      }
    });
