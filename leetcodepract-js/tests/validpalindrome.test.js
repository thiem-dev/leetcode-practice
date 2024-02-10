const isPalindrome = require("../01problems/validPalindrome125");

describe("Valid Palindrome", () => {
  let s = null;
  it("abc robert, is not a valid palindrome", () => {
    s = "abc robert";
    expect(isPalindrome(s)).toBe(false);
  });
  it("#321 rac ecar123! after removing nonalphanumeric characters is a valid palindrome", () => {
    s = "#321 rac ecar123!";
    expect(isPalindrome(s)).toBe(true);
  });
  it("empty string is a valid palindrome", () => {
    s = " ";
    expect(isPalindrome(s)).toBe(true);
  });
  it("A man, a plan, a canal: Panama is a valid palindrome", () => {
    s = "A man, a plan, a canal: Panama";
    expect(isPalindrome(s)).toBe(true);
  });
});
