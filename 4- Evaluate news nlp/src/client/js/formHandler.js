// Function for submitting article
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value
    // checkForName(formText)

    if (Client.checkForURL(formText)) {
      console.log("::: Form Submitted :::")

      postData('http://localhost:8080/article', {url: formText})
      .then(function(res) {
        document.getElementById('article-url').classList.remove('incorrect-url');
        document.getElementById('polarity').innerHTML = `Polarity score: ${polarityMapping(res.score_tag)}`;
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence score: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
      })
    } else {
      document.getElementById('article-url').value = '';
      document.getElementById('article-url').placeholder = 'Please provide valid url';
      document.getElementById('article-url').classList.add('incorrect-url');
      document.getElementById('polarity').innerHTML = ``;
      document.getElementById('agreement').innerHTML = ``;
      document.getElementById('subjectivity').innerHTML = ``;
      document.getElementById('confidence').innerHTML = ``;
      document.getElementById('irony').innerHTML = ``;
    }

}

// function for mapping polarity score
const polarityMapping = function(polarityScore) {
  let result;
  switch(polarityScore) {
    case 'P+':
      result = 'Strong positive';
      break;
    case 'P':
      result = 'Positive';
      break;
    case 'NEU':
      result = 'Neutral';
      break;
    case 'N':
      result = 'Negative';
      break;
    case 'N+':
      result = 'Strong negative';
      break;
    case 'NONE':
      result = 'Without polarity';
      break;
  }
  return result.toUpperCase();
}

// function to POST data
const postData = async function(url = '', data = {}) {
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

// export function for submitting article
export { handleSubmit }
export { polarityMapping }
