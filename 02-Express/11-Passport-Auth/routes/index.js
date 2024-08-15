var express = require('express');
const passport = require('passport');
const User = require('../models/user.schema');
const bcrypt = require('bcrypt');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.send("Login Page");
})

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/feed');
  }
);

router.post('/register', async (req, res, next) => {
  const { username, password, email } = req.body;
  console.log(req.body);
  try {
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username: username }).exec();
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully.' });

  } catch (error) {
    // Handle any errors that occurred during registration
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
router.get('/feed', function (req, res, next) {
  res.send("Feed Page");
})

module.exports = router;
