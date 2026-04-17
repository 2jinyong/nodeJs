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

app.get('/html2', function(req, res) {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/html3', function(req, res) {
    res.sendFile(path.join(__dirname, 'index3.html'));
});

app.get('/html4', function(req, res) {
    res.sendFile(path.join(__dirname, 'index4.html'));
});

console.log("서버시작dfsfdsdaf")