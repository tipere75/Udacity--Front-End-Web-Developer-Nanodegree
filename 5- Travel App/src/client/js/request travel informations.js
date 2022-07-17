export { f_requestTravelInformations }

function f_requestTravelInformations (event) {
    event.preventDefault()

    // get inputs
    let destination = document.getElementById('destination');
    let stratDate = document.getElementById('start-date');
    let endDate = document.getElementById('end-date');

    // submit request
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.message;
    })
    .then(() => {
        Client.f_displayTravelInformations();
    })

}