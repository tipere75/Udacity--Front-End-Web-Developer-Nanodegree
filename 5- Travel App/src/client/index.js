import './styles/main.scss'
import './styles/trip config section.scss'
import './styles/trip section.scss'


import globe from './media/globe.jpg'
let globeImage = document.getElementById("globe");
globeImage.src = globe;


import { f_displayTravelInformations, f_displayTravelRequest } from './js/section navigation.js'
import { f_requestTravelInformations, f_postData } from './js/request travel informations.js'
import { f_updateTripDatesAndDuration, f_updateWeatherForecast, f_uploadPixabayImages } from './js/update travel informations page.js'
import { f_datedif, f_checkDates, f_saveTrip, f_deleteTrip, f_getInitialPage } from './js/utils.js'


export {
    f_postData,
    f_displayTravelInformations,
    f_displayTravelRequest,
    f_requestTravelInformations,
    f_updateTripDatesAndDuration,
    f_updateWeatherForecast,
    f_uploadPixabayImages,
    f_datedif,
    f_checkDates,
    f_saveTrip,
    f_deleteTrip,
    f_getInitialPage
}
