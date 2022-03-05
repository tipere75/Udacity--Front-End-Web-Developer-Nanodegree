import { checkForURL } from "../src/client/js/urlChecker"

describe("Testing the checkForUrl() function", () => {
  test("Testing for missing https/http", () => {
    let url = 'www.testhttp.com'
    expect(checkForURL(url)).toBe(false);
  });
  test("Testing for missing www", () => {
    let url = 'http://testwww.com'
    expect(checkForURL(url)).toBe(false);
  });
  test("Testing for space", () => {
    let url = 'https://www.test blank space.com'
    expect(checkForURL(url)).toBe(false);
  });
  test("Testing for valid url", () => {
    let url = 'https://www.validurl.com'
    expect(checkForURL(url)).toBe(true);
  });
});
