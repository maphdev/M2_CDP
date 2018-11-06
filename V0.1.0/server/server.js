//Load express module with `require` directive
var express = require('express')
var path = require("path");
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src', 'index.html'));
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})
