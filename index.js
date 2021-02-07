'use strict'

const myMath = require('./myMath.js')
console.log(myMath);

console.log("Hello node");
const res = myMath.sum(123, 123, 123);
console.log('Sum is', res);

console.log(__filename);

const fs = require('fs').promises;

fs.readFile('./index.txt', 'utf8').then((content) => {
  const str = 'Appending New String'
  console.log(content);
  console.log(typeof content);
  const dataToAppend = `Old content:${content}\nNew content:${str}`;
  fs.appendFile('./newIndex.txt', dataToAppend, 'utf8');
});