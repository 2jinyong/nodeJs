var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var path = require('path');

app.get('/', function(req, res) {
    res.send('app.js홈화면');
});

app.get('/html', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

console.log("안녕하세요")