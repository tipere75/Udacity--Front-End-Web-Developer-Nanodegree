import './styles/main.scss'
import './styles/trip config section.scss'
import './styles/trip section.scss'


import globe from './media/globe.jpg'
let globeImage = document.getElementById("globe");
globeImage.src = globe;


import { f_displayTravelInformations, f_displayTravelRequest } from './js/section navigation.js'
import { f_requestTravelInformations } from './js/request travel informations.js'


export {
    f_displayTravelInformations,
    f_displayTravelRequest,
    f_requestTravelInformations
}
