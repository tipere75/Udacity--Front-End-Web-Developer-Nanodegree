/*
 * export functions
 */
export { f_getPolarityScoreMapping }


/*
 * functions
 */
function f_getPolarityScoreMapping(polarityScore) {
  console.log("::: Mapping polarity score :::");
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
