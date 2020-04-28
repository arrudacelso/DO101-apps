var express = require('express');
app = express();

app.get('/', function (req, res) {

  response = 'This is version 2 of the app.' + '\n'
  
  //res.send('Hello World!\n');
  res.send(response);
});

app.get('/mars', function (req, res) {
  res.send('Hello World Mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

