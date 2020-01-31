// const express = require('express');
// usersRouter = express.Router();
// const app = express();

// // CORS
// const cors = require('cors');
// const corsOptions = {
//     origin: 'http://localhost:4200'
// }
// app.use(cors(corsOptions));





// // LowDB
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('../data/users.json')
// const db = low(adapter)

// // LowDB Default
// db.defaults({ users: []})
//   .value();


// usersRouter.post('/', function (req, res, next) {

//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

//   console.log("Post received");
//   console.log(req.body);
//   user = new User();

//   user.email = req.body.email;
//   user.password = req.body.password;

//   getUser(user.email, user.password);

//   if (user) {
//       console.log(user);
//       res.send(user);
//   } else {
//       res.status('404').send();
//       return next();
//   }

// })

// function getUser(_email, _password) {

//   if (_email && _password) {

//     let user = db.get('users')
//     .find({ email : _email, password: _password })
//     .value();

//     return user;
//   }
// }


// class User {
//   _id
//   guid
//   isActive
//   balance
//   picture
//   company
//   email
//   password
//   phone
//   address
// }

// module.exports = usersRouter;