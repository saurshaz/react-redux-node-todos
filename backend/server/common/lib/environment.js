
const habitat = require('habitat');
const log = require('./logger');
const env = new habitat();
const mongojs = require('mongojs');
import path from 'path';

if (process.env.NODE_ENV !== 'test') {
  if (process.env.NODE_ENV === 'stage') {
    habitat.load(require('path').resolve(__dirname, '../../../config/.env.stage'));
  } else if (process.env.NODE_ENV === 'prod') {
    habitat.load(require('path').resolve(__dirname, '../../../config/.env.prod'));
  } else {
    habitat.load(require('path').resolve(__dirname, '../../../config/.env'));
  }
  env._db = mongojs(process.env.DB_URL, [process.env.APP_TABLE || 'lists']);
  habitat.load(path.resolve(__dirname, '../../../config/.env.test'));
} else {
  env._db = mongojs(process.env.DB_URL_TEST, [process.env.APP_TABLE || 'lists']);
}

module.exports = env;
