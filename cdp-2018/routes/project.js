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
    await cf.mongoose.connect(cf.dbURL);
    var project = new cf.Project();
    project.name = req.body.name;
    project.description = req.body.description;
    project.durationSprint = req.body.durationSprint;
    project.startingDay = req.body.startingDay;
    project.devList = req.session.userMail;
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
      res.redirect('/settings');
      cf.mongoose.disconnect();
    });
  });

router.route('/addDevToProject')
  .post(async function(req, res) {
    console.log(req.body.devMail);

    let projectId = req.session.projectId;
    let devMail = req.body.devMail;

    await cf.mongoose.connect(cf.dbURL);

    // the dev exist ?
    await cf.User.count({mail: devMail}, function(err, count) {
      // yes the dev exists
      if (count > 0){
        // the dev is in the Project's dev's list ?
        (function() {
          cf.Project.findOne({_id: projectId}, function(err, result) {
            if (err) {
              res.json({status: 500, error: err});
            }

            for (var i = 0; i < result['devList'].length; i++){
              // yes the dev is already in here, we stop
              if (result['devList'][i] == devMail){
                res.render('pages/settings', {project: result, error: "L'adresse email est déjà dans la liste des développeurs !"});
                return;
              }
            }
            // no the dev is not in here, we add him
            (function() {
              cf.Project.findOneAndUpdate({_id: projectId}, {$push:{'devList': devMail}}, {upsert:true}, function(err, project) {
                if (err) {
                  res.json({status: 500, error: err});
                }
                res.redirect('/settings');
              });
            })();
          });
        })();
      // no the dev doesn't exist
      } else {
        (function() {
          cf.Project.findOne({_id: projectId}, function(err, project) {
            if (err) {
              res.json({status: 500, error: err});
            }
            res.render('pages/settings', {project: project, error: "L'adresse email ne correspond à aucun compte développeur !"});
          });
        })();
      }
    });
  });

  router.route('/deleteDevFromProject')
    .post(async function(req, res) {
      let projectId = req.session.projectId;
      let devMail = req.body.id;
      await cf.mongoose.connect(cf.dbURL);
      await cf.Project.update({_id: projectId}, {$pull:{'devList': devMail}}, function(err, project) {
        if (err) {
          res.json({status: 500, error: err});
        }
        res.redirect('/settings');
        cf.mongoose.disconnect();
      });
    });

module.exports = router;
