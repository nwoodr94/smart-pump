// LowDB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./users.json')
const db = low(adapter)
db.defaults({ users: [] })
  .value();

// User
let user = require('./user-model');

function getUser(_email, _password) {

    user = db.get('users')
      .find({ email: _email, password: _password })
      .value();
  
    return user;
  }
  
function updateUser(_email, _newEmail, _password, _newPassword) {

db.get('users')
    .find({ email: _email })
    .assign({ email: _newEmail, password: _newPassword})
    .write();  

user = db.get('users')
    .find({ email: _newEmail, password: _newPassword })
    .value();

return user;
}

test("login a valid user", () => {
    expect(getUser("a", "b")).toBe(user);
})

test("reject invalid credentials", () => {
    expect(getUser("invalidEmail", "invalidPassword")).toBe(undefined);
})

test("return updated user", () => {
    expect(updateUser("a", "b")).toBe(user);
})