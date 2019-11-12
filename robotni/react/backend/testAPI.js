const axios = require('axios');
require('dotenv').config();

const AUTH_TOKEN = process.env.TR_TOKEN;

const url = 'https://trefle.io/api/plants/'

const common_name = "eggplant";

const plant="";

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
console.log(plant);