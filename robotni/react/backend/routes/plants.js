const router = require('express').Router();
let Plant = require('../models/plants.model');


//Will try to populate a json file with all plants
router.route('/').get((req, res) => {
    Plant.find()
        .then(plants => res.json(plants))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Will try to add a new Plant to the database
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