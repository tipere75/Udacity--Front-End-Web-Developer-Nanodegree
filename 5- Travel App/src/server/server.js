let path = require('path')

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