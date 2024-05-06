var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/1', function (req, res, next) {
  res.send('User 1');
})

router.get('/user/:ids', function (req, res, next) {
  console.log(req.params.ids)
  // res.send(req.params); // contains the id parameter from the route
  // res.json({
  //   x: req.params,
  // })

  res.render('details', {title: "Details- Learning CSS"})
})

module.exports = router;
