const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./data/users.json')
const db = low(adapter)

// Set some defaults
db.defaults({ users: []})
  .value();


function get(_username, _password) {

    if (_username && _password) {
  
      let user = db.get('users')
      .find({ email : _username, password: _password })
      .value();
  
      return user;
    }
}