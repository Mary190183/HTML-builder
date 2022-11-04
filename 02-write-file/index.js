const fs = require('fs');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const {stdout} = process;

stdout.write('Hello, please enter the data for the text.txt:\n')

process.stdin.on("data", data => {

if (data.includes('exit')) {
  stdout.write('Goodbye')
  process.exit()
}
else {
  output.write(data);
}
});
process.on('SIGINT', () => {
  stdout.write('Goodbye');  
  process.exit();
});