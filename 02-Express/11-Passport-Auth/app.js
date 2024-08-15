require('dotenv').config({ path: "./.env" })

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// ######## passport 🟩🟩🟩
var passport = require('passport')
var LocalStrategy = require('passport-local')
var session = require('express-session');
var bcrypt = require('bcrypt')

// mongoDB connection & schema
require('./config/db').connectDB()
const User = require('./models/user.schema')


// Configure session middleware
app.use(session({
  secret: 'your-secret-key', // Replace with a secure secret key
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Initialize passport and session
app.use(passport.initialize())
app.use(passport.session())

// Configure Passport strategy
passport.use(new LocalStrategy(async function (username, password, done) {
  console.log('Attempting to authenticate user:', username);

  try {
    // Find the user by username
    const user = await User.findOne({ username: username }).exec();
    console.log('Found user:', user);

    if (!user) {
      // User not found
      return done(null, false, { message: 'Incorrect username.' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Password does not match
      return done(null, false, { message: 'Incorrect password.' });
    }

    // Authentication successful
    return done(null, user);

  } catch (error) {
    // Handle any errors
    console.error('Error during authentication:', error);
    return done(error);
  }
}
));

// Serialize and deserialize user
passport.serializeUser(function (user, done) {
  try {
    done(null, user.id); // Serialize user ID into the session
  } catch (error) {
    console.error('Error during serialization:', error);
    done(error);
  }
});

passport.deserializeUser(async function (id, done) {
  try {
    // Use async/await instead of callbacks
    const user = await User.findById(id).exec();
    done(null, user); // Deserialize user from ID
  } catch (err) {
    console.error('Error during deserialization:', err);
    done(err, null);
  }
});

// Initialize passport and session


// ######### 🛑🛑🛑


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
