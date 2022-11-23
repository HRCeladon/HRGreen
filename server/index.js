
const express = require('express');
const app = express();
const path = require('path');
const controllers = require('./controllers/controllers.js');
const Users = require('./db/index.js');
const argon2 = require('argon2');
const crypto = require('crypto');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static(path.join(__dirname, '../client/dist')));

// ROUTES
app.post('/signup', (req, res) => {
  Users.find({_id: req.body.email}).then((data) => {
    if (data.length === 0) {
      let salt = crypto.randomBytes(16);
      argon2.hash(req.body.pwd, {salt}).then((hashed) => {
        Users.insertMany([{_id: req.body.email, password: hashed, firstName: req.body.fName, lastName: req.body.lName}], {ordered: false})
        .then((data) => res.send())
        .catch((err) => res.send());
      });
    } else {
      res.send('An account under this email already exists. Please log in.');
    }
  }).catch((err) => console.log('ERROR HERE: ', err));
})

app.post('/login', (req, res) => {
  Users.find({_id: req.body.email}).then((data) => {
    if (data.length !== 0) {
      argon2.verify(data[0].password, req.body.pwd).then((check) => {
        if (check) {
          res.send('Success');
        } else {
          res.send('Incorrect password. Please try again.');
        }
      });
    } else {
      res.send(`User with ${req.body.email} does not exist. Please create an account or try again.`);
    }
  }).catch((err) => console.log('ERROR HERE: ', err));
})

app.get('/trees', (req, res) => {
  if (req.body.email) {
    Users.find({_id: req.body.email}, {trees:1, _id:0}).then((data) => {
      res.send(data)
    })
    .catch((err) => console.log('ERROR HERE: ', err));
  } else {
    Users.find({}, {trees:1, _id:0}).then((data) => {
      res.send(data)
    })
    .catch((err) => console.log('ERROR HERE: ', err));
  }
})

const PORT = process.env.PORT || 3001;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);