const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/trees';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

let userSchema = mongoose.Schema({
  _id: String, // email
  password: String, // hashed password
  firstName: String,
  lastName: String,
  employee: {type: Boolean, default: false},
  trees: Array,
  trips: Array
})

const Users = mongoose.model('Users', userSchema);

// load in the one
Users.insertMany([{_id: 'alan.vargas@example.com', firstName: 'Alan', lastName: 'Vargas', password: '$argon2id$v=19$m=65536,t=3,p=4$gcHZqgCxVOosAOmfpYbg5A$aKqeVRnqYkm3R6dC9Yn/5gaNfVwivUQnUJ3pqqaFzIY', employee: false, trees: [{lat: 43.074684, lng: -89.384445}], trips: [{from: "Milwaukee, Wisconsin", to: "Sacramento, California", startDate: Date("2023-06-03T07:00:00.000Z"), endDate: Date("2023-05-05T07:00:00.000Z"), travelers: ["John Hopkins", "Mary Hopkins"], completed: false, reviews: [{title: "Great Trip!", body: "This trip was so enjoyable. There was something for everyone in the family! Highly recommend!", media:[]}]}]}]).then(() => console.log('Success!')).catch(() => {});

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = Users;