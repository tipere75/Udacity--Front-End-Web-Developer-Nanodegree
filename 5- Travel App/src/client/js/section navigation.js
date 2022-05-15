export { displayTravelInformations }
export { displayTravelRequest }

function displayTravelInformations() {
    $('#trip-config-section')[0].classList.add('section-hidden')
    $('#trip-info-section')[0].classList.remove('section-hidden')
}

function displayTravelRequest() {
  $('#trip-config-section')[0].classList.remove('section-hidden')
  $('#trip-info-section')[0].classList.add('section-hidden')
}
