var express = require('express');
var app = express();

app.post('/test', function (req, res) {
    console.log('qqqqqqqqq')
  res.send('Hello World!');
});

app.post('/api/test', function (req, res) {
    console.log('aaaaaa')
  res.send('err');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});