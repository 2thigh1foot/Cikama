const router = require('express').Router();
let Plant = require('../models/plants.model');


//Will try to populate a json file with all plants
// Uses Express as a middleware to communicate with the application
// This is the Read component of the CRUD app
router.route('/').get((req, res) => {
    Plant.find()
        .then(plants => res.json(plants))
        .catch(err => res.status(400).json('Error: '+ err));
});

// Will try to add a new Plant to the MongoDB Atlas database
// This is the Create component of the CRUD app
router.route('/add').post((req,res)=>{
    const plantName = req.body.plantName;
    const waterness = Boolean(req.body.waterness);

    const newPlant = new Plant({
        plantName,
        waterness
    });

    newPlant.save()
        .then(()=> res.json('Plant added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;