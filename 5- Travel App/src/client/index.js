import './styles/main.scss'
import './styles/trip config section.scss'
import './styles/trip section.scss'


import globe from './media/globe.jpg'
let globeImage = document.getElementById("globe");
globeImage.src = globe;


import { displayTravelInformations, displayTravelRequest } from './js/add travel.js'


export {
    displayTravelInformations,
    displayTravelRequest
}
