const containsDuplicate = require("../01problems/duplicate217.js");

describe("containsDuplicate", () => {
  it("return false when array has no duplicates", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(containsDuplicate(nums)).toBe(false);
  });
  it("return true when array has duplicates", () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });
});
