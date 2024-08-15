var express = require('express');
const { isLoggedIn } = require('../middleware/isLoggedIn');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res, next) => {
  res.render('register', { error_messages: req.flash('error') });
})

router.get('/login', function (req, res, next) {
  res.send("Login Page");;
});

// Profile route
router.get('/profile', isLoggedIn, (req, res) => {
  // res.render('profile', { user: req.user });
  res.send('profile Page');
});

module.exports = router;
