var express = require('express');
var router = express.Router();

// get database configs
let cf = require('../database/dbConfig.js');

router.route('/createProject')
  .get(function(req, res) {
    console.log('get');
    res.render('pages/createProject');
  })
  .post(async function(req, res) {
    console.log('post');

    await cf.mongoose.connect(cf.dbURL);
    var project = new cf.Project();
    project.name = req.body.name;
    project.description = req.body.description;
    project.durationSprint = req.body.durationSprint;
    project.startingDay = req.body.startingDay;
    project.devList = req.body.dev;
    project.usCount = 0;
    project.backlog = [];
    await project.save(function(err) {
      if (err) {
        res.send({status: 500, error: err});
      }
      res.redirect('/');
      cf.mongoose.disconnect();
    })
  });

router.route('/project')
  .get(async function(req, res) {
    let projectId = req.session.projectId;
    await cf.mongoose.connect(cf.dbURL);
    cf.Project.findOne({_id: projectId}, function(err, project) {
      if (err) {
        res.json({status: 500, error: err});
      }
      res.render('pages/project', {project: project});
      cf.mongoose.disconnect();
    });
  })
  .post(function(req, res) {
    let id = req.body.id;
    req.session.projectId = id;

    res.redirect('/project');
  });

router.route('/settings')
  .get(async function(req, res) {
    let projectId = req.session.projectId;
    await cf.mongoose.connect(cf.dbURL);
    cf.Project.findOne({_id: projectId}, function(err, project) {
      if (err) {
        res.json({status: 500, error: err});
      }
      res.render('pages/settings', {project: project});
      cf.mongoose.disconnect();
    });
  })
  .post(async function(req, res) {
    let projectId = req.session.projectId;
    let update = {
      name: req.body.name,
      description: req.body.description,
      durationSprint: req.body.durationSprint,
      startingDay: req.body.startingDay
    };
    await cf.mongoose.connect(cf.dbURL);
    cf.Project.findOneAndUpdate({_id: projectId}, update, {upsert:true}, function(err, project) {
      if (err) {
        res.json({status: 500, error: err});
      }
      res.redirect('project');
      cf.mongoose.disconnect();
    });
  });

router.route('/backlog')
  .get(async function(req, res){
    let projectId = req.session.projectId;
    await cf.mongoose.connect(cf.dbURL);
    cf.Project.findOne({_id: projectId}, function(err, project) {
      if (err) {
        res.json({status: 500, error: err});
      }
      res.render('pages/backlog', {backlog: project.backlog, project: project});
      cf.mongoose.disconnect();
    });
  })

router.route('/userStory')
  .post(async function(req, res) {
    var count = 0;
    let projectId = req.session.projectId;
    
    await cf.mongoose.connect(cf.dbURL);

    cf.Project.findOne({_id: projectId}, function(err, project) {
      if (err) {
        res.json({status: 500, error: err});
      }
      count = project.usCount;
    });

    count = count + 1;

    cf.Project.findOneAndUpdate({_id: projectId}, 
      {$push: {"backlog": {id: count, description: req.body.usDesc, difficulty: req.body.usDiff}}}, 
      {upsert:true}, 
      function(err, project) {
      if (err) {
        res.json({status: 500, error: err});
      }
    });

    cf.Project.findOneAndUpdate({_id: projectId}, 
      {usCount: count}, 
      {upsert:true}, 
      function(err, project) {
      if (err) {
        res.json({status: 500, error: err});
      }
      res.redirect('backlog');
      cf.mongoose.disconnect();
    });

  });
module.exports = router;
