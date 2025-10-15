const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const app = express();
const router = express.Router();  // This creates a router instance
module.exports = router;
// Passport Config
require('./config/passport')(passport);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));
// EJS
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));
// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars for flash messages
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);
app.use('/auth', require('./routes/auth'));
// create server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port http://localhost:${PORT}`));
