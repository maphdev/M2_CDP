var express = require('express');
var router = express.Router();

router.get('/createAccount', function(req, res) {
    res.render('pages/createAccount');
});

router.get('/login', function(req, res) {
    res.render('pages/login');
});

module.exports = router;
