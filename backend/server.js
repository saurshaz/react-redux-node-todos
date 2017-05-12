

const env = require('./server/common/lib/environment');
const log = require('./server/common/lib/logger');
const express = require('express');
const app = express();
const passport = require('passport');

app.set('logger', log);
app.set('env', env);

// Bootstrap application settings
require('./server/common/express')(app, passport);

// Bootstrap routes
require('./server/common/routes')(app, passport);

app.listen(app.get('APP_PORT') || 3000, () => {
  log.info('started app at ', env.get('APP_PORT'), ' in ', env.get('NODE_ENV'));
});
