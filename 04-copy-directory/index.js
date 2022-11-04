const fs = require('fs');
const path = require('path');
let source = path.resolve( __dirname, 'files')
let destination = path.resolve( __dirname, 'file-copy')
//создание
fs.mkdir(destination, {recursive: true }, (err) => {   
  if (err) {
  console.error(err)
  return
  }
});
  
fs.readdir(destination, function (err, files) {
//очистка 
  files.forEach(file => {
    fs.unlink(path.join(destination, file), (err) => {
      if (err) {
      console.error(err)
      return
      }
    });
  });
//копирование
  fs.readdir(source, function (err, files) {
    files.forEach(file => {
      fs.copyFile(path.resolve(source, file), path.resolve(destination, file), (err) => {
        if (err) {
          console.error(err)
          return
      }
      });
    }); 
  });
});
