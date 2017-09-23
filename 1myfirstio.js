// my first i/o!

//get the node filesystem module
var fs = require('fs');
//get the data from command line using readFileSync and process.argv (file path provided as first command-line argument by verifier)
var buffer = fs.readFileSync(process.argv[2]);
//var buffer = fs.readFileSync('C:/Nodes/learnyounode/testfile.txt')  // testing
//console.log( "buffer:" + "\n" + buffer)  // testing
//convert the data into string
var str = buffer.toString();
//console.log( "str:" + "\n" + buffer)  // testing
//split string by newlines and store it into an array variable
var split = str.split("\n");
//return count of newlines by returning the array length minus 1 (there is no newline at very end)
console.log(split.length - 1);

//official solution:
var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString.split('\n').length - 1  // Oh.
//ps : "you can avoid the .toString() by passing 'utf8' as the second argument to readFileSync, then you'll get a string!"