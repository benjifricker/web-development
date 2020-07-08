const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile.js');


// Use fs.readfile() and callback functions
fs.readFile('./file1.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});


// Use native Promises with promisifiedReadfile.js
let firstSentence;
promisifiedReadfile('./file1.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8')
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});


// Use async/await with promisifiedReadfile.js
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file1.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

readFiles()
