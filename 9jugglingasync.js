//9 juggling async

//"you will need to queue the results and keep track of how many of the urls have returned their entire contents. only
// once you have them all, you can print the data to the console"


//first npm install concat-stream
var http = require('http')
var catStream = require('concat-stream')

// get all data from url ("not just the first 'data' event") 1st by using a concatenator package
var orderedResults = []
var waiting = 0

for (var i = 2; i < process.argv.length; i += 1) {
	http.get(process.argv[i], function (response) {
	response.setEncoding('utf8'); //encode buffers as strings
	waiting --;
	response.pipe(catStream(function (data) {
		//data.toString()  //didn't use it in HTTP COLLECT, used setEncoding instead
		
		orderedResults[i - 2] = data;
		
		if (orderedResults.length == process.argv.length - 2) {
			complete();
		}
		// Queue the results, keep track of how many urls have returned data.





	}))
	}
)
}
//print each complete string of data in order of input
function complete() {
	for (var i = 0; i < process.argv.length - 2; i++) {
		console.log orderedResults[i];
	}
}

// waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// i got it by random :( i did not get it. 


// official answer:

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
	for (var i = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err)

			results[index] = data.toString()
			count ++

			if count == 3
				printResults()
		}))
	})
}

for var(i = 0; i < 3; i++){
	httpGet[i]
}


// do over that ignored the lesson of sync  vs async
for (var i = 2; i < 5; i += 1) {          // FOR LOOPS DON'T WORK BECAUSE THEY ARE SYNCHRONOUS AND DONT WAIT FOR 
									      // ASYNCHRONOUS TO FINISH BEFORE CONTINUING
	http.get(process.argv[i], function (response) {
		console.log ("http get started. var i = " + i)
	//response.setEncoding('utf8'); //encode buffers as strings
	response.pipe(catStream(function (data) {
		//data.toString()  //didn't use it in HTTP COLLECT, used setEncoding instead
		console.log ("catStream returned. var i = " + i)
		index = i - 2;

		orderedResults[index] = data.toString;

		if (orderedResults.length == 3) {
			printResults();
		};

		// Queue the results, keep track of how many urls have returned data.

///////////////////////////////
//DO OVER FINALLY UNDERSTANDING:
///////////////////////////////

//you can't mix async w sync programming

//first npm install concat-stream
var http = require('http')
var catStream = require('concat-stream')
var count = 0;
var orderedResults = []

// get all data from url ("not just the first 'data' event") 1st by using a concatenator package


// this function is used last once everything is returned from the 3 streams and 
// put into indexed array
function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(orderedResults[i]);
	}
}

// this function is an async function with an async callback and it takes time to work
// it runs wild, so if it's in a for loop it doesn't gaf
function getUrlStuff(index) {
	http.get(process.argv[index + 2], function (response) {
		//console.log ("http get started. var index = " + index);  // testing
		response.pipe(catStream(function (data) {
			//console.log(" catStream returned. Var index = " + index); // testing
			orderedResults[index] = data.toString();
			count ++;                    // count ends up working like the for loop
			if (count == 3) {            // only when count is 3 does the printer work
				printResults();
			}
		}))
	})
}
// the actual programming is just running the async program in a loop with a different index each time.
// this makes the async operation part of a sync operation. 
// and the async
// stops itself from printing until count is where we want it. because count ++ only happens
// once data is returned to the array.
for (var index = 0; index < 5; index ++) {
	getUrlStuff(index);
}