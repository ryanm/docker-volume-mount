const fs = require('fs');

fs.readFile('/shared_volume/test_file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }
  console.log(`Content of the file: ${data}`);
});
