import { f_getPolarityScoreMapping } from "../src/client/js/func_get polarity score mapping.js"

describe("Testing the f_getPolarityScoreMapping() function", () => {
  test("Should show \'Strong positive\'", () => {
    let val = 'P+'
    expect(f_getPolarityScoreMapping(val)).toBe("STRONG POSITIVE");
  });
  test("Should show \'Positive\'", () => {
    let val = 'P'
    expect(f_getPolarityScoreMapping(val)).toBe("POSITIVE");
  });
  test("Should show \'Neutral\'", () => {
    let val = 'NEU'
    expect(f_getPolarityScoreMapping(val)).toBe("NEUTRAL");
  });
  test("Should show \'Negative\'", () => {
    let val = 'N'
    expect(f_getPolarityScoreMapping(val)).toBe("NEGATIVE");
  });
  test("Should show \'Strong negative\'", () => {
    let val = 'N+'
    expect(f_getPolarityScoreMapping(val)).toBe("STRONG NEGATIVE");
  });
  test("Should show \'Without sentiment\'", () => {
    let val = 'NONE'
    expect(f_getPolarityScoreMapping(val)).toBe("WITHOUT POLARITY");
  });
});
