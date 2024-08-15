require('dotenv').config({ path: "./.env" });

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 🔷🔷🔷🔷🔷🔷🔷 Authentication Setup 🔷🔷🔷🔷🔷🔷🔷
const session = require('express-session');
const flash = require('connect-flash'); // Import connect-flash
const passport = require('./config/passport-config'); // Passport.js configuration
const authRoutes = require('./routes/auth.route'); // Routes related to authentication

// Establish MongoDB connection and load user schema
require('./config/db-connection').connectDB();
require('./models/user.schema');
// 🔷🔷🔷🔷🔷🔷🔷 Authentication Setup End 🔷🔷🔷🔷🔷🔷🔷

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 🔶🔶🔶🔶🔶🔶🔶 Session and Passport Setup 🔶🔶🔶🔶🔶🔶🔶
// Initialize session middleware for persistent login sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key', // Replace with your secret
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Initialize connect-flash
app.use(flash());

// Initialize Passport.js and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Use authentication routes
app.use('/', authRoutes);
// 🔶🔶🔶🔶🔶🔶🔶 Session and Passport Setup End 🔶🔶🔶🔶🔶🔶🔶

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
