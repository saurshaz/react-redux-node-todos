
const api = require('../api');
module.exports = (app, passport) => {
  const log = app.get('logger');

  app.all('/*', (req, res, next) => {
    // if unauthenticated and a fyler call, return a JSON
    req.header('referer');

    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  app.get('/lists', (req, res) => {
    api._getAllLists({})
      .then((data) => {
        console.log(data);
        res.json({data});
      }, (err) => {
        console.error(err);
        res.json({detail: err, err: true});
      });
  });
};
