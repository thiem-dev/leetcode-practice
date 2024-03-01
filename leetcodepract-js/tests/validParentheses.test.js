const isValid = require("../01problems/validparetheses20.js");

describe("isValidParentheses", () => {
  let s = null;
  it("return true if () is valid parentheses pair", () => {
    s = "()";
    expect(isValid(s)).toBe(true);
  });
});
