// Axios handles API requests
const axios = require('axios');
// Configuration of environment variables
require('dotenv').config();

const KEY = process.env.WEATHER_KEY;
// Test zip code. Successful.
const zip_code = "91711";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${zip_code}&units=metric&APPID=${KEY}`;

axios.get(url, {
    response: 'json',
    headers:{Authorization:`Bearer ${KEY}`}
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    });
    //TODO: Parse data and throw it into the database