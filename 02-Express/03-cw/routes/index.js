var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Express' });
});

// -------------------------
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', function (req, res, next) {
  console.log(req.body);
  setTimeout(() => {
    res.redirect('/')
  }, 2000);
})

// -------------------------
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register Now' });
});


router.get('/create', function (req, res, next) {
  console.log(req.query)
  res.send('Form Created Successfully')
});

router.post('/create', function (req, res, next) {
  console.log(req.body)
  res.send('Using POST Method - Form Submitted')
})

module.exports = router;
