const dotenv = require('dotenv')
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const cors = require('cors');


app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


/*
 * Call to MeaningCloud API
 */
app.post('/article', async function(req, res) {
  const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

  // console.log(req.body.url);
  const response = await fetch(`${baseURL}?key=${process.env.API_KEY}&lang=en&url=${req.body.url}`);

  try{
    const data = await response.json();
    // console.log(data);
    res.send(data);
  } catch(error) {
    console.log("error: ", error);
  }
})
