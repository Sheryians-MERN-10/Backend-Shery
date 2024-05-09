var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/register', function (req, res, next) {
  res.render('register', {title: 'Register'})
})

router.post('/registeredShow', function (req, res, next) {
  res.render('registeredSuccess', {title: 'Registered Successfully', data: req.body})
})

module.exports = router;
