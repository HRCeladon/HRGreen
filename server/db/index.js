const mongoose = require('mongoose');
const axios = require('axios');

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

var cities = ['New York City, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA'];
var companions = [[], ['Halley', 'Caleb', 'Caitlin'], ['Ricardo', 'Michael'], ['Tuan', 'Bala'], ['Sonia Ann', 'Juan', 'Adam', 'Nick', 'Greta', 'Joy']];
var titles = ['WOW! Highly recommend', 'Wish I could stay forever!', 'Amazing views', 'Not what I expected...', 'A trip to remember...'];
var bodies = ['This trip was great, a little something for everyone!', 'Such a fun time! Thanks!', 'It wasn\'t exactly what I expected, but still very fun regardless', 'We had a great time. Will definitely be returning', 'A nice relaxing getaway. I loved exploring the city!'];

axios.get('https://randomuser.me/api/?results=99&nat=us').then((data) => {
  Users.deleteMany({}).then(() => {
    let results = data.data.results;
    let people = [{_id: 'alan.vargas@example.com', firstName: 'Alan', lastName: 'Vargas', password: '$argon2id$v=19$m=65536,t=3,p=4$gcHZqgCxVOosAOmfpYbg5A$aKqeVRnqYkm3R6dC9Yn/5gaNfVwivUQnUJ3pqqaFzIY', employee: false, trees: [{lat: 43.074684, lng: -89.384445}], trips: [{from: "Milwaukee, Wisconsin", to: "Sacramento, California", startDate: Date("2023-06-03T07:00:00.000Z"), endDate: Date("2023-05-05T07:00:00.000Z"), travelers: ["John Hopkins", "Mary Hopkins"], completed: false, reviews: [{title: "Great Trip!", body: "This trip was so enjoyable. There was something for everyone in the family! Highly recommend!", media:[]}]}]}];
    for (let i = 0; i < results.length; i ++) {
      let trips = Math.round(Math.random() * 3);
      let person = {
        _id: results[i].email,
        firstName: results[i].name.first,
        lastName: results[i].name.last,
        password: '$argon2id$v=19$m=65536,t=3,p=4$gcHZqgCxVOosAOmfpYbg5A$aKqeVRnqYkm3R6dC9Yn/5gaNfVwivUQnUJ3pqqaFzIY',
        employee: Boolean(Math.round(Math.random())),
        trees: [],
        trips: []
      };
      for (let j = 0; j < trips; j ++) {
        let year = Math.round(Math.random() + 2022);
        let month = Math.round(Math.random() * 11);
        let day = Math.round(Math.random() * 24 + 1);
        let trip = {
          from: cities[Math.round(Math.random() * 9)],
          to: cities[Math.round(Math.random() * 9)],
          startDate: new Date(year, month, day),
          endDate: new Date(year, month, day + 3),
          travelers: companions[Math.round(Math.random() * 4)],
          completed: Boolean(new Date(year, month, day + 3) < new Date()),
          // if trip is completed and the random number is under 0.8 (not all completed trips will have a review)
          reviews: (Boolean(new Date(year, month, day + 3) < new Date()) && (Math.random() < 0.8) ? [
            {title: titles[Math.round(Math.random() * 4)],
            body: bodies[Math.round(Math.random() * 4)],
            media: []}
          ] : [])
        }
        person.trips.push(trip);
      }
      people.push(person);
    }
    console.log(people);
    // load in the people
    Users.insertMany(people).then(() => console.log('Success!')).catch(() => {});
  });
})

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = Users;