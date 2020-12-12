// import the express framework/library
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// these are the custom modules that we will write; import them here:
var postsRouter = require('./routes/posts');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// initialize express library as an object
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// register the paths of routes
app.use('/', indexRouter); // root route will correspond to indexRouter file, will handle the action when users address the root of the website
app.use('/users', usersRouter); // usersRouter will be invoked when users try to access website.com/users; usersRouter will also take care of website.com/users/anythingElse
app.use('/posts', postsRouter);

// app exported:
module.exports = app;
