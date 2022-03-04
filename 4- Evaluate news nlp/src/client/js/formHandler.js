// Function for submitting article
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value
    // checkForName(formText)

    console.log("::: Form Submitted :::")

    postData('http://localhost:8080/article', formText)
    .then(function(res) {
        document.getElementById('results').innerHTML = res
    })
}

// function to POST data
const postData = async function(url = '', data = {}) {
  console.log('Submitted: ', data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log('Anlysis: ', newData);
    return newData;
  } catch(error) {
    console.log("error", error);
  }
}

// export function for submitting article
export { handleSubmit }
