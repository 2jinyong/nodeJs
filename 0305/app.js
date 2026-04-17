var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var path = require('path');

app.get('/', function(req, res) {
    res.send('app.js홈화면');
});

app.get('/1', function(req, res) {
    res.send('1페이지');
});

app.get('/2', function(req, res) {
    res.send('2페이지');
});

app.get('/3', function(req, res) {
    res.send('3페이지');
});

app.get('/html', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});