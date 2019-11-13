// Axios handles API requests
const axios = require('axios');
// Configuration of environment variables
require('dotenv').config();
// Authorization token is necessary for any API calls made by a client application
const AUTH_TOKEN = process.env.TR_TOKEN;
// We will be operating in the plants API library for trefle as all others are either
// too general or too specific (species name)
const url = 'https://trefle.io/api/plants/'
// Just a test for now. This will change. Ideally this will communicate with the backend and feed info into database
// rather than directly communicating with the frontend
const common_name = "eggplant";

const plant="";
// Query for the plant name
axios.get(url + `?q=${common_name}`, {
    response: 'json',
    headers:{Authorization:AUTH_TOKEN}
    })
    .then(response => {
        console.log(response.data);
        plant = JSON.parse(response.data)
    })
    .catch(error =>{
        console.log(error);
    });
    //This is a test of the API get request
console.log(plant);