
import express from 'express';

import env from './server/common/lib/environment';
import log from './server/common/lib/logger';

const app = express();

app.set('logger', log);
app.set('env', env);

// Bootstrap application settings
require('./server/common/express')(app);

// Bootstrap routes
require('./server/common/routes')(app);

app.listen(app.get('APP_PORT') || 3000, () => {
  log.info('started app at ', env.get('APP_PORT'), ' in ', env.get('NODE_ENV'));
});
