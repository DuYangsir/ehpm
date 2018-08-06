const process = require('child_process')

console.log('starting simulator of iphone6 plus')
console.log('please wait~')

process.exec('xcrun instruments -w \'iphone 6 Plus\'')