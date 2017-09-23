//redoing

var fs = require('fs')
var path = require('path')


module.exports = function (directory, extfilt, callback) {
fs.readdir(directory, function (err, list) {
	if (err) return callback(err); // if readdir has an error, return (err) to callback (in program.js)
	var filtered = []; // set var for empty list
	list.forEach(function (file) { // for each syntax
		if (path.extname(file) === '.' + extfilt) // if file extension matches filter from extfilt
			filtered.push(file); // add to filtered list
	})
	return callback(null,filtered); //return the result of running null, and the filtered list into the callback function (defined in program.js)
})

}






