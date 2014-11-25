var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/test', function (req, res) {
  res.send('Hello Test');
});

app.get('/html', function (req, res) {
  res.send('<h1>Hello HTML</h1>');
});

app.listen(3000);