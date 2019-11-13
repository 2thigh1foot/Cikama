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
    
    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;
    const location = Number(req.body.location);
    const plants = Array(['hi'])
    // req.body.plants;
    

    // Server side logging
    console.log('USERNAME: ' + username);
    console.log('PASSWORD: ' + password);
    console.log('LOCATION: ' + location);
    console.log('PLANTS ARRAY: ' + plants);


    const newUser = new User({username, password, location, plants});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch( (err) => { 
            console.log(err);
            res.status(400).json('Error: ' + err);
        });
});

module.exports = router;