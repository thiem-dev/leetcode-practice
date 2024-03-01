const isValid = require("../01problems/validparetheses20");

describe("isValidParentheses", () => {
  let s = null;
  it("return true if () is valid parentheses pair", () => {
    s = "()";
    expect(isValid(s)).toBe(true);
  });
  it("return true if ()[]{} is valid parentheses pairs", () => {
    s = "()[]{}";
    expect(isValid(s)).toBe(true);
  });
  it("return false if (] invalid parentheses pairs", () => {
    s = "(]";
    expect(isValid(s)).toBe(false);
  });
});
