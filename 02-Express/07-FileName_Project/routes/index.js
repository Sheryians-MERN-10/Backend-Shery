let path = require('path')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function (req, res, next) {
  // console.log(path.dirname(__dirname))
  var currentWorkingFolder = path.dirname(__dirname)
  // console.log(path.join(currentFolder, 'public', 'uploads', req.body.fileName+req.body.selectExtension))
  let newFileName = req.body.fileName + req.body.selectExtension;
  let finalPath = path.join(currentWorkingFolder, 'public', 'uploads', newFileName)
  res.render('create', { finalPath, newFileName })
})

module.exports = router;
