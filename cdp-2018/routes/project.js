var express = require('express');
var router = express.Router();

router.get('/createProject', function(req, res) {
    res.render('pages/createProject');
});

router.get('/project', function(req, res) {
    res.render('pages/project');
});

router.get('/settings', function(req, res) {
    res.render('pages/settings');
});

module.exports = router;
