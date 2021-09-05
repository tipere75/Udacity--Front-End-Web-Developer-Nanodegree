/*
Global variables
*/
// accessing openweathermap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=3ea004b560aa273fd59c1a502b4c82b2';
const country = 'us';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/*
Function to get data from openweathermap api
*/
const getWeatherData = async (baseURL, zipCode, country, apiKey) => {
    // ask for weather data from openweathermap api
    const response = await fetch(baseURL + zipCode + `,` + country + apiKey);

    try {
        // return weather data if available
        const newData = await response.json();
        return newData;

    } catch (error) {
        // erorr handling
        console.log("error", error);

    }
}

/*
Function to post data
*/
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;

      } catch(error) {
          console.log("error", error);

      }
  }

/*
Function to update UI
*/
const updateUI = async () => {
    const request = await fetch('/all');

    try {
        const allData = await request.json();
        // display weather informations
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;

        // reset inputs
        document.getElementById('zip').value = '';
        document.getElementById('feelings').value = '';

    } catch (error) {
        console.log('error', error);

    }
}

/*
Get and post weather data then update UI
*/
function displayWeatherData (event) {
    // retrieve user inputs
    const userZipCode = document.getElementById('zip').value;
    const userFeelings = document.getElementById('feelings').value;

    // chain get weather data + post data + update UI
    getWeatherData(baseURL, userZipCode, country, apiKey)
    .then((data) => {
        postData('/add', {date: newDate, temp: data.main.temp, content: userFeelings});
    })
    .then (() => {
        updateUI()
    })
    .catch(function(error) {
        console.log(error);
        alert('Invalid inputs format');
    })
}

/*
Event listener
*/
document.getElementById('generate').addEventListener('click', displayWeatherData);
