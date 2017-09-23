// http file server

var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var fileloc = process.argv[3]

var filestream = fs.createReadStream(fileloc)


var server = http.createServer(function (req, res) {
	// request handling logic
	filestream.pipe(res)




})

server.listen(port)

// I passed!!! on my first verify attempt!
// I created a program that makes an http server at a port given
// by first argument, and creates a file read stream from a file location 
// given as second argument, and sends the file as a server response to
// the client

//"Write an HTTP server that serves the same text file for each request it
// receives. Your server should listen on the port provided as first argument.
// You will be provided with the location of the file to serve as the second
// command line argument. You must use the fs.createReadStream() method to
// stream the file contents to the response."

//... but I don't really get it I feel like...

official solution:
var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res) {
	res.writeHead(200, { 'content-type': 'text/plain' }) //fuckin what?? // oh okay. 
	fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
