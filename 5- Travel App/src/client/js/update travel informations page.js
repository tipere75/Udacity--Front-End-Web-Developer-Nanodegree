export { f_updateTripDatesAndDuration, f_updateWeatherForecast, f_uploadPixabayImages }


function f_updateTripDatesAndDuration(destination, startDate, endDate, resGeonames) {

    $('#trip-info-content-destination')[0].innerHTML = destination + ', ' + resGeonames.geonames[0].countryName;
    $('#trip-info-content-start-date')[0].innerHTML = startDate;
    $('#trip-info-content-end-date')[0].innerHTML = endDate;
    $('#trip-info-content-duration')[0].innerHTML = `${Client.f_datedif(startDate, endDate)} day(s)`;
    
    const today = new Date();
    $('#trip-info-content-time-to-departure')[0].innerHTML = `${Client.f_datedif(today, startDate)} day(s)`;

    return 0;
}


function f_updateWeatherForecast(resWeatherbit) {

    for (let i = 1; i <= 3; ++i) {
        let target = document.getElementById('weather-forecast-' + i);
        target.innerHTML = '';

        let weatherbitData = resWeatherbit.data[i - 1];

        target.insertAdjacentHTML(
            'afterbegin',
            `<p style="font-weight:bold;">Day ${i}: ${weatherbitData.datetime}</p>
            <span>${weatherbitData.weather.description}</span><br>
            <span>Average temperature: ${weatherbitData.temp}</span><br>
            <span>Rain probability: ${weatherbitData.pop}%</span>`
        )

    }
    
    return 0;
}


function f_uploadPixabayImages(resPixabay) {
    for (let i = 1; i <= 3; i++) {
        $('#trip-image' + i)[0].src = resPixabay.hits[i - 1].largeImageURL;
    }

    return 0;
}