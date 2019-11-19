const router = require('express').Router();
let User = require('../models/users.model');

// at localhost:5000/routes/ we will make a get request to find all users and store them in json format
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// at localhost:5000/routes/add we will try to create a new user
router.route('/add').post((req, res) => {
    
    const email = req.body.email;
    const username = req.body.username;
    const password_hash = req.body.password_hash;
    const zipcode = Number(req.body.zipcode);
    const plants = [] // New users have no plants
    

    // Server side logging
    console.log('EMAIL: ' + email);
    console.log('USERNAME: ' + username);
    console.log('PASSWORD HASH: ' + password_hash);
    console.log('ZIPCODE: ' + zipcode);
    console.log('PLANTS ARRAY: ' + plants);


    const newUser = new User({email, username, password_hash, zipcode, plants});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch( (err) => { 
            console.log(err);
            res.status(400).json('Error: ' + err);
        });
});

module.exports = router;