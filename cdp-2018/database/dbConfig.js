// use mongoose
let mongoose = require('mongoose');
// options recommended by mLab for a connection to the database
let options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
// url of the database
const dbURL = "mongodb://user:password1@ds159707.mlab.com:59707/m2-cdp-2018";
// models
let project = require('../models/projectModel.js').model('Project');;
let user = require('../models/userModel.js').model('User');;


let dataConfig = {
  mongoose: mongoose,
  options: options,
  dbURL: dbURL,
  Project: project,
  User: user
}

module.exports = dataConfig;
