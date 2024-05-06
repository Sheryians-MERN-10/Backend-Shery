var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', function (req, res, next) {
  // res.json({ success:true, message:"test"});//to show json
  // res.send("Hello from auth page");//to show text
  // res.render("auth")// we are going to koad view(ejs->html)
  res.render("auth", {
    info: "This is auth page",
    profile: { name: "Ayan" },
    subjects: ["HTML", "CSS", "JS"],
    users: [
      { id: 1, name: "Ayan", email: "ayan@gmail.com" },
      { id: 2, name: "Rehan", email: "rehan@gmail.com" },
      { id: 3, name: "Anas", email: "anas@gmail.com" },
    ],
  });

});

router.get('/register', function (req, res, next) {
  res.render("register")
});

router.get('/Login', function (req, res, next) {
  res.render("Login")
});

router.get('/update/:id', function (req, res, next) {
  res.send("<h1>This is user update page</h1>");
});

router.get('/delete/:id', function (req, res, next) {
  res.send("<h1>This is user delete page</h1>");
});

module.exports = router;