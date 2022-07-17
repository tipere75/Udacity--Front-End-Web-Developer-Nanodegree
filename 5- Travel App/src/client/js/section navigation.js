export { f_displayTravelInformations }
export { f_displayTravelRequest }

function f_displayTravelInformations() {
    $('#trip-config-section')[0].classList.add('section-hidden')
    $('#trip-info-section')[0].classList.remove('section-hidden')
}

function f_displayTravelRequest() {
  $('#trip-config-section')[0].classList.remove('section-hidden')
  $('#trip-info-section')[0].classList.add('section-hidden')
}

export {
  displayTravelInformations,
  displayTravelRequest
}