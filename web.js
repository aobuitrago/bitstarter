var express = require('express');

var app = express.createServer(express.logger());

var indexStr = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send(indexStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
