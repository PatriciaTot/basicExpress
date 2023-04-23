const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// define routers
const indexRouter = require('./routes/index');
const jsonRouter = require('./routes/json');
const error = require('./routes/error');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// install global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// install routes middlewares for /first et /second
app.use('/', indexRouter);

// install routes middlewares for /json et /json/random 
app.use('/json', jsonRouter);

// in all other cases use error route middleware
app.use(error);

module.exports = app;
