// Express is used as middleware, as is cors I believe
// Mongoose is backend MongoDB with Node.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//This is a file that sets up the environment
require('dotenv').config();

//instances of express
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded())

//The initial connection to our Mongo Atlas server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () =>{
  console.log("MongoDB database connection established successfully");
});

//These may change depending on how Kate has implemented our frontend
//This is just how the tutorial has implemented the endpoints
const plantsRouter = require('./routes/plants');
const usersRouter = require('./routes/users');

app.use('/plants', plantsRouter);
app.use('/users', usersRouter);


// We have connection! TODO: Error-handling
app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
});