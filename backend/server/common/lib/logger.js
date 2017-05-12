

/*
 * Wrapper for logging server messages at different log levels
*/
const Hoek = require('hoek');
const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');

Hoek.assert(process.env.LOG_LEVEL, 'Must define LOG_LEVEL');

const stream = new PrettyStream();
stream.pipe(process.stdout);

function requestSerializer(req) {
  return {
    path: req.path,
    method: req.method,
    headers: req.headers
  };
}

function responseSerializer(res) {
  return {
    payload: res.output.payload
  };
}

function errorSerializer(error) {
  if (!error) {
    return;
  }

  if (typeof error === 'string') {
    return {
      message: error
    };
  }

  // The `message` property of an Error object isn't enumerable,
  // so we clone the object and attach it to make sure it's logged
  const serializedData = JSON.parse(JSON.stringify(error));
  serializedData.message = error.message;

  return serializedData;
}

module.exports = bunyan.createLogger({
  name: process.env.SERVICE_NAME || 'todos',
  level: process.env.LOG_LEVEL || 'info',
  serializers: {
    request: requestSerializer,
    response: responseSerializer,
    error: errorSerializer
  },
  stream
});
