console.log("Welcome to your first node app!");
console.log(__dirname);

const name = require("./name");
const sayHi = require("./function");
const data = require('./data');
require('./calculation.js');


sayHi(name.name1);
sayHi(name.name2);