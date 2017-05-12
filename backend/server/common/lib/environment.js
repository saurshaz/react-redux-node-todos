
const habitat = require('habitat');
const log = require('./logger');
const env = new habitat();
const mongojs = require('mongojs');

if (process.env.NODE_ENV !== 'test') {
  if (process.env.NODE_ENV === 'stage') {
    habitat.load(require('path').resolve(__dirname, '../../../config/.env.stage'));
  } else if (process.env.NODE_ENV === 'prod') {
    habitat.load(require('path').resolve(__dirname, '../../../config/.env.prod'));
  } else {
    habitat.load(require('path').resolve(__dirname, '../../../config/.env'));
  }
  env._db = mongojs(env.get('DB_URL'), [env.get('APP_TABLE') || 'lists']);
} else {
  habitat.load(require('path').resolve(__dirname, '../../../config/.env.test'));
  env._db = mongojs(env.get('DB_URL_TEST'), [env.get('APP_TABLE') || 'lists']);
}

module.exports = env;
