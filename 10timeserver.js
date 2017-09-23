//10 time server
var net = require('net')
var port = process.argv[2]
var server = net.createServer(function (socket) {

	//store date in correct format
	var date = new Date()
	year = date.getFullYear().toString()
	month = ('0' + (date.getMonth()+1)).slice(-2).toString()
	day = ('0' + date.getDate()).slice(-2).toString()
	hour = ('0' + (date.getHours())).slice(-2).toString()
	minute = ('0' + (date.getMinutes())).slice(-2).toString()

	fdate = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\r\n"

	//write date to socket
	socket.write(fdate)

	//close connection
	socket.end()

	// socket.pipe(socket) // (next)


});

server.listen(port)

// official solution:

var net = require('net')

function now () {
	var d = new Date()
	return d.getFullYear() + '-'
	+ zeroFill(d.getMonth() + 1) + blah blah blah

}
var server = net.createServer(function (socket) {
	socket.end(now()+'\n')
})

server.listen(Number(process.argv[2]))
