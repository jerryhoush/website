var express = require('express')
var app = express()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
app.set('port', (process.env.PORT || 5000))
app.use('/img', express.static(__dirname + '/img'))

app.get('/', function(request, response) {
  response.sendFile('index.html')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})