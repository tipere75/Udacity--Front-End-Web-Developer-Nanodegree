export { f_datedif, f_checkDates }

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