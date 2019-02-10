var express = require('express');
const path = require('path');

var app = express();

app.set('PORT', (process.env.PORT || 5000))
app.use('/img', express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(app.get('PORT'), function() {
  console.log("Node app is running at localhost:" + app.get('PORT'))
});
