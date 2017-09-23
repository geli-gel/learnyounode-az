//8 

//first npm install concat-stream
var http = require('http')
var catStream = require('concat-stream')

// get all data from url ("not just the first 'data' event") 1st by using a concatenator package


http.get(process.argv[2], function (response) {
	response.setEncoding('utf8') //encode buffers as strings
	response.pipe(catStream(function (data) {
		//data.toString() // (didn't use)
		console.log(data.length)//print number of characters
		console.log(data)//print complete string of characters sent by the server


	}))
	}
)



//official solution
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})