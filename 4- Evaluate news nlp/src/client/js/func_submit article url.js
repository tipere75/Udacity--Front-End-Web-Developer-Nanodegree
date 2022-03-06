/*
 * export functions
 */
export { f_submitArticleURL }
export { f_postData }

// const fetch = require("node-fetch");
// import fetch from "node-fetch"

/*
 * functions
 */
// submit article url
function f_submitArticleURL(event) {
  event.preventDefault()

  console.log("::: Submitting article :::");

  // check what text was put into the form field
  let formText = document.getElementById('article-url').value

  if (Client.f_checkURL(formText)) {
    console.log("::: Form Submitted :::")

    Client.f_postData('http://localhost:8080/article', {url: formText})
    .then((res) => Client.f_updateUI(res, '')
    )

  } else {
    Client.f_updateUI(null, 'incorrect url')

  }
}


// POST data
async function f_postData(url = '', data = {}) {
  console.log('Submitted: ', data);

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log('Analysis: ', newData);
    return newData;
  } catch(error) {
    console.log("error", error);
  }
}
