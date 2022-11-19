const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/trees';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

let userSchema = mongoose.Schema({
  _id: String, // email
  password: String, // hashed password
  firstName: String,
  lastName: String
})

const Users = mongoose.model('Users', userSchema);

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = Users;