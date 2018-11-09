//Load express module with `require` directive
var express = require('express');
var path = require("path");
var app = express();

// set the view engine to ejs
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/database')));

// load bodyParser for post requests
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/createAccount', function(req, res) {
    res.render('pages/createAccount');
});

app.get('/createProject', function(req, res) {
    res.render('pages/createProject');
});

app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.get('/project', function(req, res) {
    res.render('pages/project');
});

app.get('/settings', function(req, res) {
    res.render('pages/settings');
});

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})
