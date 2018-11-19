//Load express module with `require` directive
var express = require('express');
var path = require("path");
var app = express();

// set static folder
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/database')));

// set the view engine to ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// load bodyParser for post requests
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// using express-session
app.use(require('express-session')({
        name: '_cdp', // The name of the cookie
        secret: '1234', // The secret is required, and is used for signing cookies
        resave: false, // Force save of session for each request.
        saveUninitialized: false // Save a session that is new, but has not been modified
    }));

app.use(function(req, res, next){
  res.locals.userId = req.session.userId;
  res.locals.mail = req.session.userMail;
  res.locals.projectId = req.session.projectId;
  next();
});

// import routes
var mainRoutes = require('./routes/main');
app.use('/', mainRoutes);
var authRoutes = require('./routes/auth');
app.use('/', authRoutes);
var projectRoutes = require('./routes/project');
app.use('/', projectRoutes);

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('app listening on port 8080!');
});
