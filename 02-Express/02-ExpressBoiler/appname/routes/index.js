var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', function (req, res, next) {
  res.send('Hello from Auth Page');
})

module.exports = router;
