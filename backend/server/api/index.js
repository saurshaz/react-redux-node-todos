
const mongojs = require('mongojs');
const _db = mongojs(process.env.DB_URL, ['lists']);

const _getAllLists = findObj => new Promise((resolve, reject) => {
  _db.collection('lists').find(findObj, (err, data) => {
    if (!err) {
      resolve(data);
    } else {
      resolve({detail: err, err: true});
    }
  });
});


module.exports = {_getAllLists};
