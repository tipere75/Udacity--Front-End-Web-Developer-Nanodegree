// const fetch = require("node-fetch");
// require('jest-fetch-mock').enableMocks()

import { f_postData } from "../src/client/js/func_submit article url.js"

describe("Testing the f_postData() function", () => {

  test("Testing for valid url - BBC article", async () => {

    const input = {
      url: 'https://www.bbc.com/news/world-europe-60600487'
    }

    const output = {
      agreement: 'DISAGREEMENT',
      confidence: 76,
      irony: 'IRONIC',
      score_tag: 'NEU',
      subjectivity: 'SUBJECTIVE'
    }
    // console.log(f_postData('http://localhost:8080/article', input));
    expect(f_postData('http://localhost:8080/article', input)).resolves.toEqual(output)
  });
});
