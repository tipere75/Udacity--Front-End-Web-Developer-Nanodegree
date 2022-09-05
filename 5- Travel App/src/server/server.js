let path = require('path')

const fetch = require('node-fetch')

const dotenv = require('dotenv')
dotenv.config();

/* Express */
const express = require('express') // Express to run server and routes
const app = express() // Start up an instance of app

app.use(express.static('dist')) // for prod only
// app.use(express.static('src/client')) // for dev only


/* Dependencies */
const bodyParser = require('body-parser')


/* Middleware*/
//Here we are configuring express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


/* Local server */
// designates what port the app will listen to for incoming requests
const port = 8080;

const server = app.listen(port, () => {
console.log('server running');
console.log(`running on localhost: ${port}`);
});

// initialisation
app.get('/', function (_req, res) {
    res.sendFile('dist/index.html')
})


/* Dummy API */
const dummyAPIResponse = require('./dummy API.js')
app.get('/test', function (_req, res) {
    res.json(dummyAPIResponse);
})


/* call to external api */
app.post('/getCityLocation', async function(req, res) {
    const baseURL = 'http://api.geonames.org/';
    
    const response = await fetch(`${baseURL}searchJSON?formatted=true&q=${req.body.destination}&lang=en&username=${process.env.GEONAMES_USER_ID}&style=full`);

    try{
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("error: ", error);
    }
})

app.post('/getWeatherForecasts', async function(req, res) {
    const baseURL = 'https://api.weatherbit.io/v2.0/forecast/daily';

    const response = await fetch(`${baseURL}daily?lat=${req.body.lat}&lon=${req.body.lng}&key=${process.env.WEATHERBIT_API_KEY}&days=3`);

    try{
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("error: ", error);
    }
})

app.post('/getPictures', async function(req, res) {
    const baseURL = 'https://pixabay.com/api/';

    const response = await fetch(`${baseURL}?key=${process.env.PIXABAY_API_KEY}&q=${req.body.destination}&lang=en&image_type=photo&editors_choice=true&per_page=3`);

    try{
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("error: ", error);
    }
})