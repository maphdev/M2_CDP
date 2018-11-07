//Load express module with `require` directive
var express = require('express')
var path = require("path");
var app = express()

// import ressources
app.use(express.static(path.join(__dirname, '../src')));

//Define request response in root URL (/)

app.get('/', function (req, res) {
  res.redirect('/index.html');
})

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/html', 'index.html'));
})

app.get('/createAccount.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/html', 'createAccount.html'));
})

app.get('/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/html', 'login.html'));
})

app.get('/createProject.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/html', 'createProject.html'));
})

app.get('/project.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/html', 'project.html'));
})

app.get('/settings.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/html', 'settings.html'));
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})
