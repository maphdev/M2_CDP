var express = require('express');
var router = express.Router();

// get database configs
let cf = require('../database/dbConfig.js');

router.route('/')
  .get(async function(req, res) {
    await cf.mongoose.connect(cf.dbURL);
    cf.Project.find(function(err, projects) {
      if (err) {
        res.json({status: 500, error: err});
      }
      res.render('pages/index', {projects: projects});
      //res.send(projects);
      cf.mongoose.disconnect();
    });
  });

router.route('/test')
    .get(async function(req, res) {
      res.render('pages/test');
    });


module.exports = router;
