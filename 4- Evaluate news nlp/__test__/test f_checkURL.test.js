import { f_checkURL } from "../src/client/js/func_check url.js"

describe("Testing the f_checkURL() function", () => {
  test("Testing for missing https/http", () => {
    let url = 'www.testhttp.com'
    expect(f_checkURL(url)).toBe(false);
  });
  test("Testing for missing www", () => {
    let url = 'http://testwww.com'
    expect(f_checkURL(url)).toBe(false);
  });
  test("Testing for space", () => {
    let url = 'https://www.test blank space.com'
    expect(f_checkURL(url)).toBe(false);
  });
  test("Testing for valid url", () => {
    let url = 'https://www.validurl.com'
    expect(f_checkURL(url)).toBe(true);
  });
});
