
import path from 'path';
import mongojs from 'mongojs';
import Habitat from 'habitat';

const env = new Habitat();

if (process.env.NODE_ENV !== 'test') {
  if (process.env.NODE_ENV === 'stage') {
    Habitat.load(path.resolve(__dirname, '../../../config/.env.stage'));
  } else if (process.env.NODE_ENV === 'prod') {
    Habitat.load(path.resolve(__dirname, '../../../config/.env.prod'));
  } else {
    Habitat.load(path.resolve(__dirname, '../../../config/.env'));
  }
  env.thisDb = mongojs(process.env.DB_URL, [process.env.APP_TABLE || 'lists']);
  Habitat.load(path.resolve(__dirname, '../../../config/.env.test'));
} else {
  env.thisDb = mongojs(process.env.DB_URL_TEST, [process.env.APP_TABLE || 'lists']);
}

export default env;
