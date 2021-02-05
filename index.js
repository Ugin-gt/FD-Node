'use strict'

const myMath = require('./myMath.js')
const fs = require('fs').promises;
console.log(myMath);

fs.readFile('./index.txt', 'utf8').then((content) => {
  const str = 'Appending New String'
  console.log(content);
  console.log(typeof content);
  const dataToAppend = `Old content:${content}\nNew content:${str}`;
  fs.appendFile('./newIndex.txt', dataToAppend, 'utf8');
});

// console.log("Hello node");
// const res = sum(123, 123, 123);
// console.log('Sum is', res);