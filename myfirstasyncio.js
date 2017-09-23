//my first async i/o!


//get the node filesystem module
var fs = require('fs');

//async???
fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
	if (err) throw err;
	console.log(data.split('\n').length - 1);
});
//yes!


//official solution:

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
	//fs.readFile(file,'utf8',callback) can also be used
	var lines = contents.toString().split('\n').length - 1
	console.log(lines)
})