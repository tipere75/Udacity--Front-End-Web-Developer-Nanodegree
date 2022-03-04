function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);

    let urlRegex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');

    return inputText.match(urlRegex) == null ? false:true;
}

export { checkForURL }
