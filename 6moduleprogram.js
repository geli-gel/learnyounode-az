var mymodule = require('./mymodule');




mymodule(process.argv[2], process.argv[3], function (err, list) {
	if (err) {  // if there was an error in readdir, it gets sent here because THIS is the callback function
		return console.error('error!!! you fool!', err); // this function prints the special message
	};

	list.forEach(function(file) {   // for each item in list, which is "filtered" from mymodule (because it sent
									// null and filtered to the callback)
		console.log(file);  // print them bitches on their own separate lines
	})
} )

