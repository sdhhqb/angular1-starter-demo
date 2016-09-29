var express = require('express');
var path = require('path');
var app = express();

var port = 8080;

app.get('/', function (req, res) {
	console.log('/: send build index.html');
	res.sendFile(__dirname + '/app/dist/index.html');
});

app.use(express.static('./app'));

app.get('*', function (req, res) {
	console.log('*: send index.html');
	res.sendFile(__dirname + '/app/dist/index.html');
});

app.listen(port, function () {
	console.log("app listening on port \x1b[32m"+port+"\x1b[0m");
});