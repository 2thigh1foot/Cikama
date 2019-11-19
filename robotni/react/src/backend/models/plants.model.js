const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
This tells the database what how to construct a plant document
    We will eventually add more I believe. I'm not sure if this is
    how we will implement the database in the final iteration but
    for testing purposes, this is acceptable
*/
const plantSchema = new Schema({
    plantName: {type: String, required: true},
    waterness: {type: Boolean, required: true},
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;