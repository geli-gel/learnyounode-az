//9jugglingasync//on my own

//FAWKIN FINALLY

var http = require('http')
var catStream = require('concat-stream')
var urls = process.argv.slice(2)
var count = 0
var ordered = []


function runCallbacks(index) {
	http.get(urls[index], function (response) {
		
		response.pipe(catStream(function (data) {
			ordered[index] = data.toString();
			count ++;

			if (count == 3) {
				printResults();
			}
		}))
	})
};

function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(ordered[i]);
	};
};

function getDatas() {
	for (var i = 0; i < 3; i++) {
		runCallbacks(i);
	};
};

getDatas();



// this solution requires http.get (an async function) to be called from another function
// that calls it in a loop in order for the results to be stored in order. They get stored
// as they return (most likely out of order) but are correctly ordered since the loop
// calls the callbacks and stores them using an index 

// finally, the 3rd function prints the results

// therefore, the solution needs three separate functions working together. they are:
// the first 2 functions: 
//		1) http.get(url by index) { async operation, count ++ each time callback 
//	returns data. when count = total urls length, print all the results (w 3rd fxn) } 
//		2) for (each url arg) { run http.get(url)}	
//		3) print the final results which were stored in an array
