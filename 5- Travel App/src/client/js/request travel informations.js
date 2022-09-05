export { f_requestTravelInformations, f_postData }


function f_requestTravelInformations (event) {
    event.preventDefault()

    // get inputs
    let destination = document.getElementById('destination').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;

    let checkDates = Client.f_checkDates(startDate, endDate);
    if (checkDates === false) {
        alert('Please set a start date prior to end date !')

    } else {
        // submit request
        console.log("::: Form Submitted :::")
        Client.f_postData('http://localhost:8080/getCityLocation', {destination: destination, startDate: startDate, endDate: endDate})
        .then(function(resGeonames) {
            
            // update trip informations
            Client.f_updateTripDatesAndDuration(destination, startDate, endDate, resGeonames)

            Client.f_postData('http://localhost:8080/getWeatherForecasts', {lat: resGeonames.geonames[0].lat, lng: resGeonames.geonames[0].lng})
            .then(function(resWeatherbit) {
                console.log(resWeatherbit)

                Client.f_updateWeatherForecast(resWeatherbit)
            })

        })
        .then(() => {
            Client.f_postData('http://localhost:8080/getPictures', {destination: destination})
            .then(function(resPixabay) {
                Client.f_uploadPixabayImages(resPixabay)

            })
        })
        .then(() => {
            Client.f_displayTravelInformations();
        })
    } 

    return 0;
}



// POST data
async function f_postData(url = '', data = {}) {
    console.log('Submitted: ', data);
  
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    try {
      return await response.json();
    } catch(error) {
      console.log("error", error);
    }
  }
  