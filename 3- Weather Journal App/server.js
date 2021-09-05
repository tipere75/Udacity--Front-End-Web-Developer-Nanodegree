/*
Setup environment
*/
// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// express to run server and routes
const express = require('express')

// start up an instance of app
const app = express();

/* sependencies */
const bodyParser = require('body-parser')
/* middleware*/
// configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// initialize main project folder
app.use(express.static('website'));

/*
Requests
*/
// post Route
app.post('/add', (req, res) => {
    // update projectData
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['content'] = req.body.content;
    console.log(JSON.stringify(projectData));
    // send back projectData
    res.send(projectData);
});


// initialize all route with a callback function
app.get('/all', (req, res) => {
    res.send(projectData);
});


/*
Spin up server
*/
const port = 8080;
// callback to debug
const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});
