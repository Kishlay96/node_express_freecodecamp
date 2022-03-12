console.log(__dirname);
const os = require('os');
const {readFile,writeFile} = require('fs');
const http = require('http');

const _ = require('lodash');
const Item = [2,[3,4,[67]]]
const newItem = _.flattenDeep(Item);
console.log(newItem);
