const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const HOST = 'localhost';
const corsOptions = {
  origin: 'http://localhost:4200'
}
const bodyParser = require('body-parser')


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// LowDB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('../data/users.json')
const db = low(adapter)

// LowDB Default
db.defaults({ users: [] })
  .value();



// // UserRouter
// const usersRouter = require('./users.js');
// app.use('/', usersRouter);


app.post('/', function (req, res, next) {

  console.log("User Received");

  let email = req.body.email;
  let password = req.body.password;


  let user = getUser(email, password);


  if (user) {
    console.log(user);
    res.send(user);
  } else {
    console.log("User does not exist");
    res.status('404').send();
    return next();
  }

})

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
})

function getUser(_email, _password) {

  let user = db.get('users')
    .find({ email: _email, password: _password })
    .value();

  return user;
}


class User {
  _id
  guid
  isActive
  balance
  picture
  company
  email
  password
  phone
  address
}

