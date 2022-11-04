const fs = require('fs');
const path = require('path');
const secretFolder = path.join(__dirname, "secret-folder");
const {stdout} = process;

fs.readdir(secretFolder, function (err, files) {
  
  files.forEach(file => {
    let fileInfo = path.join(secretFolder, file);
    
    fs.stat(fileInfo, (err, stats) => {
      if (stats.size > 0) {
        const {name, ext} = path.parse(fileInfo);
        let output = `${name} - ${ext.slice(1)} - ${stats.size} bytes\n`;
        stdout.write(output), (err) => {
          if (err) {
            console.error(err)
            return
            }}
      }
    });
  });
});