const fs = require('fs');

const promisifiedReadfile = (file, encoding) => 
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
			if (err) {
				reject(err.message);
      }
        resolve(text);
      });
});

module.exports = promisifiedReadfile