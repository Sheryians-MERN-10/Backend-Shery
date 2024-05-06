var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function (req, res, next) {
  res.render('register', {title: "Register"})
})
router.get('/show', function (req, res, next) {
  res.render('show', {title: "Show"})
})
router.post('/register', function (req, res, next) {
  // console.log(req.body.name)
  res.render('show', {data: req.body, title: "Show Page"})
  // res.render('show', {title: "Show using Post", userName: req.body.name, address: req.body.address})
})

module.exports = router;
