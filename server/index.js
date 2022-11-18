require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const controllers = require('./controllers/controllers.js');
const db = require('./db/index.js');



app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static(path.join(__dirname, '../client/dist')));




const PORT = process.env.PORT || 3001;


app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);