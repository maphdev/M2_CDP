var express = require('express');
var router = express.Router();

// get firebase
var firebase = require("../database/authConfig.js").firebase;
// get database configs
let cf = require('../database/dbConfig.js');

router.route('/createAccount')
  .get(function(req, res) {
    res.render('pages/createAccount');
  })
  .post(function(req, res) {
    var userName = req.body.username;
    var mail = req.body.mail;
    var password = req.body.password;
    firebase
    .auth()
    .createUserWithEmailAndPassword(mail, password)
    .then(function() {
      cf.mongoose.connect(cf.dbURL);
      var user = new cf.User();
      user.mail = mail;
      user.userName = userName;
      user.save(function(err) {
        if (err) {
          res.json({status: 500, error: err});
        }
        return cf.mongoose.disconnect();
      });
    })
    .then(function() {
      req.session.userId = firebase.auth().currentUser.uid;
      req.session.userMail = mail;
      res.redirect('/');
    })
    .catch(function(error) {
      res.render('pages/createAccount', {error: error});
    });
  });

router.route('/login')
  .get(function(req, res) {
    res.render('pages/login');
  })
  .post(function(req, res) {
    var mail = req.body.mail;
    var password = req.body.password;
    firebase
    .auth()
    .signInWithEmailAndPassword(mail, password)
    .then(function(){
      req.session.userId = firebase.auth().currentUser.uid;
      req.session.userMail = mail;
      res.redirect('/');
    })
    .catch(function(error){
      res.render('pages/login', {error: error});
    });
  });

router.route('/logout')
  .get(function(req, res) {
    firebase
    .auth()
    .signOut()
    .then(function(){
      req.session.userId = null;
      req.session.userMail = null;
      res.redirect('/');
    })
    .catch(function(error){
      res.send(error);
    });
  });

router.route('/resetPassword')
  .post(function(req, res) {
    let mail = req.body.resetToMail;
    firebase.auth().sendPasswordResetEmail(mail)
    .then(function() {
      res.redirect('/login');
    })
    .catch(function(error){
      res.render('pages/login', {error: error});
    });
  });

module.exports = router;
