// Express
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const HOST = 'localhost';
const corsOptions = { origin: 'http://localhost:4200'}
const bodyParser = require('body-parser');

// JWT
const jwt = require('jsonwebtoken');

// LowDB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('../data/users.json')
const db = low(adapter)
db.defaults({ users: [] })
  .value();

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Server 
app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`);
})

//Model
let user = require('./user-model');

// User Login 
app.post('/', function (req, res, next) {

  user = getUser(req.body.email, req.body.password);

  // If the user exists, send it back, else send 404
  if (user) {
    let payload = { subject: user._id}
    let token = jwt.sign(payload, "secretKey");
    user.token = token;

    res.status(200).send(user);
    return next();
  } else {
    res.status('404').send();
    return next();
  }

})

// User Edit
app.patch('/', function (req, res, next) {

    updateUser(req.body.email, req.body.newEmail, req.body.password, req.body.newPassword);
    res.status(200).send(user);
    return next();
})

// Helpers
function getUser(_email, _password) {

  user = db.get('users')
    .find({ email: _email, password: _password })
    .value();

  return user;
}

function updateUser(_email, _newEmail, _password, _newPassword) {

  console.log(_email);
  console.log(_newEmail);
  console.log(_password);
  console.log(_newPassword);

  db.get('users')
    .find({ email: _email })
    .assign({ email: _newEmail, password: _newPassword})
    .write();  

  user = db.get('users')
    .find({ email: _newEmail, password: _newPassword })
    .value();

  console.log(user);

  return user;
}

