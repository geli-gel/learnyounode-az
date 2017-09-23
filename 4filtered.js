//filtered.js
var fs = require('fs');
var path = require('path');
var filter = process.argv[3];
var directory = process.argv[2];
//async
fs.readdir(directory, function callback (err, list) {
	if (err) throw err;  // you don't have to put this
	var filtered = [];  // you don't have to go this route
	
	for (var i = 0; i < list.length; i++) { // for items in list
		if (path.extname(list[i]) === ('.' + filter)) {  // if list extension === .filter provided
			filtered.push(list[i]);  // add to filtered array
		}
	}
	for(var o = 0; o < filtered.length; o++) {  //print the array
		console.log(filtered[o]);
	}

})

//official answer
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (file) {
		if (path.extname(file) === '.' + process.argv[3])
			console.log(file)
	})
})

