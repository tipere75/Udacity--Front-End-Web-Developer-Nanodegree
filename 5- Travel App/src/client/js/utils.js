export { f_datedif, f_checkDates, f_saveTrip, f_deleteTrip, f_getInitialPage }

function f_datedif(startDate, endDate) {
    let sd = new Date(startDate);
    let ed = new Date(endDate);

    return(parseInt((ed - sd) / (1000 * 60 * 60 * 24), 10));
}


function f_checkDates(startDate, endDate) {
    let sd = new Date(startDate);
    let ed = new Date(endDate);

    return sd <= ed ? true:false;
}


function f_saveTrip() {
    localStorage.setItem('previousVersion', $('#trip-info-section')[0].innerHTML);

    return 0;
}


function f_deleteTrip() {
    localStorage.removeItem('previousVersion');

    Client.f_displayTravelRequest();
}


function f_getInitialPage() {
    if (localStorage.getItem('previousVersion') !== null) {
        $('#trip-info-section')[0].innerHTML = localStorage.getItem('previousVersion');
        
        Client.f_displayTravelInformations();
    }
}