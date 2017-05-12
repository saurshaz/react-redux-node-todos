

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const expressNunjucks = require('express-nunjucks');

module.exports = (app, passport) => {

  app.set('port', (process.env.PORT || 3000));

  app.disable('x-powered-by');

  app.set('views', path.join(__dirname, '..', 'views'));

  app.use(express.static(path.join(__dirname, '../..', 'public')));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

  app.use(session({
    secret: process.env.SESSIONS_SECRET,
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  expressNunjucks(app, {
    autoescape: true,
    throwOnUndefined: false,
    trimBlocks: false,
    lstripBlocks: false,
    watch: true,
    noCache: true,
    tags: {}
  });

  app.set('view cache', false);
  app.set('view engine', 'html');
};
