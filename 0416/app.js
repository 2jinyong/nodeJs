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
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    let sum = num1+num2
    console.log(sum)
    res.send("num1 + num2 = " + sum)
});
