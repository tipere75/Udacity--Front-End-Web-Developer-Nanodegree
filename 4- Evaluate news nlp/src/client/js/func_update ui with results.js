/*
 * export functions
 */
export { f_updateUI }


/*
 * functions
 */
function f_updateUI(res, status) {
  console.log("::: Updating UI :::");

  // incorrect url format
  if (status == 'incorrect url') {
    document.getElementById('article-url').value = '';
    document.getElementById('article-url').placeholder = 'Please provide valid url';
    document.getElementById('article-url').classList.add('incorrect-url');
    document.getElementById('polarity').innerHTML = ``;
    document.getElementById('agreement').innerHTML = ``;
    document.getElementById('subjectivity').innerHTML = ``;
    document.getElementById('confidence').innerHTML = ``;
    document.getElementById('irony').innerHTML = ``;

  } else {
    document.getElementById('article-url').classList.remove('incorrect-url');
    document.getElementById('polarity').innerHTML = `Polarity score: ${Client.f_getPolarityScoreMapping(res.score_tag)}`;
    document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
    document.getElementById('confidence').innerHTML = `Confidence score: ${res.confidence}`;
    document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;

  }
}
