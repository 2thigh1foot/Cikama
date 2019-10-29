import MongoClient from mongodb

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:3000'

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    (err, client) => {
        if(err){
            console.error(err)
            return
        }
    })

const db = client.db('robotni')