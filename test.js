var fs = require("fs");
var jison = require("jison");

var bnf = fs.readFileSync("parser.jison", "utf8");
var parser = new jison.Parser(bnf);


var example1 = fs.readFileSync("parseExample1.txt", "utf8");

var jsonString = parser.parse(example1);

console.log(jsonString);


var jsObject = JSON.parse(jsonString);
