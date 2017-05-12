

require('../../server/common/lib/environment');
const api = require('../../server/api');
const assert = require('assert');
const request = require('request');
const log = require('../../server/common/lib/logger');

beforeEach((done) => {
  // Before each test
  done();
});


describe('api-service', () => {
  // // this.timeout(70000)

  // no access token
  it('route-findall', (done) => {

    const options = {};

    api._getAllLists(options)
      .then((data) => {
        assert.notEqual(data, null);
        console.log(data);
        done();
      }, (err) => {
        assert.equal(err, null);
        done();
      });
  });
});
