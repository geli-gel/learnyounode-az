// 13 HTTP JSON API server

var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var url = require('url')

var server = http.createServer(function (req, res) {
	// request handling logic
  parsedUrl = url.parse(req.url, true)
  var stringtime = parsedUrl.query.iso  //works
  isotimebaby = new Date(stringtime)
  //console.log(isotimebaby)
  if (parsedUrl.pathname === '/api/parsetime') {

    //set hour, minute, second to be jsonified:
    var hour = isotimebaby.getHours()//Number(stringtime.substr(11,2))
    var minute = isotimebaby.getMinutes()//Number(stringtime.substr(14,2))
    var second = isotimebaby.getSeconds()//Number(stringtime.substr(17,2))
    //write head cont type app/JSON
    res.writeHead(200, { 'Content-Type': 'application/json'})
    //store the JSON time:
    var jsontime = JSON.stringify({hour: hour, minute: minute, second: second})
    //serve the JSON time:
    res.end(jsontime) // not workinG!!

  }

  else if (parsedUrl.pathname === '/api/unixtime') {
    //samething for unix time
    res.writeHead(200, { 'Content-Type': 'application/json'})
    unixtime = new Date(stringtime).getTime()
    var jsonunixtime = JSON.stringify({unixtime: unixtime})
    res.end(jsonunixtime)

  }

  else {
    res.writeHead(404)
    res.end()
  }

})

server.listen(port)

// I did it! I had to look at the official answer to figure out to to convert the time
// to a Date object. but i got it.


//the official answer is separated out by functions:
var http = require("http")
var url = require("url")

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result
  //uses a regexp.test() (regexp is ^starts with \escapes/ so
  // "starts with" "/api/parsetime"where I used an if else if else
  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type':'application/json' })
    res.end(JSON.stringify(result))
  }
  else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]))
