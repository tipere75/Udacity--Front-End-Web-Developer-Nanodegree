/*
 * export functions
 */
export { f_checkURL }


/*
 * functions
 */
function f_checkURL(inputText) {
    console.log("::: Checking URL :::", inputText);

    let urlRegex = new RegExp('^(http[s]?:\\/\\/(www\\.)){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');

    return inputText.match(urlRegex) == null ? false:true;
}
