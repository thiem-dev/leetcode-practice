const isAnagram = require("../01problems/validAnagram242.js");

describe("isAnagram", () => {
  const s = null;
  const t = null;
  it("return true if s is anagram of t", () => {
    s = "anagram";
    t = "nagaram";
    expect(isAnagram(s, t)).toBe(true);
  });
  it("return false if s is not anagram of t", () => {
    s = "rat";
    t = "car";
    expect(isAnagram(s, t)).toBe(false);
  });
});
