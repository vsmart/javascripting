var fs = require('fs');
var path = require('path');

module.exports = listFiles;

function listFiles(dir, extension, callback){
  var dirList = [];
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);
    for (i = 0; i < list.length; i++){
      if (path.extname(list[i]) == ('.' + extension)) {
        dirList.push(list[i]);
      }
    }
    return callback(null, dirList);
  })
};
