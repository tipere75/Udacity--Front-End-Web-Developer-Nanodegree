import { polarityMapping } from "../src/client/js/formHandler"

describe("Testing the polarityMapping() function", () => {
  test("Should show \'Strong positive\'", () => {
    let val = 'P+'
    expect(polarityMapping(val)).toBe("STRONG POSITIVE");
  });
  test("Should show \'Positive\'", () => {
    let val = 'P'
    expect(polarityMapping(val)).toBe("POSITIVE");
  });
  test("Should show \'Neutral\'", () => {
    let val = 'NEU'
    expect(polarityMapping(val)).toBe("NEUTRAL");
  });
  test("Should show \'Negative\'", () => {
    let val = 'N'
    expect(polarityMapping(val)).toBe("NEGATIVE");
  });
  test("Should show \'Strong negative\'", () => {
    let val = 'N+'
    expect(polarityMapping(val)).toBe("STRONG NEGATIVE");
  });
  test("Should show \'Without sentiment\'", () => {
    let val = 'NONE'
    expect(polarityMapping(val)).toBe("WITHOUT POLARITY");
  });
});
