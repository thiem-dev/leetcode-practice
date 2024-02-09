const twoSum = require("../01problems/twosum1");

describe("twoSum", () => {
  let nums = null;
  let target = null;
  it("return [2,7] if sums exist", () => {
    nums = [2, 7, 11, 15];
    target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
  it("return false if no sum exists", () => {
    nums = [2, 7, 11, 15];
    target = 3;
    expect(twoSum(nums, target)).toBe(false);
  });
});
