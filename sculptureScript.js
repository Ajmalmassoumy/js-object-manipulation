
const sculptureList = require('./data');
const sculptureListLengths = [];

for (const sculpture of sculptureList) {
    const lengthObject = {};
    for (const key in sculpture) {
        lengthObject[key] = sculpture[key].length;
    }
    sculptureListLengths.push(lengthObject);
}
console.log(sculptureListLengths);
