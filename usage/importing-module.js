const myModule = require('./exporting-module.js');
const instance = new myModule();

console.log(instance.hello());
console.log(instance.goodbye());
