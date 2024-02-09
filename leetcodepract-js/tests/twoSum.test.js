const twoSum = require("../01problems/twosum1");

describe("twoSum", () => {
  let nums = null;
  let target = null;
  it("return [2,7] if sums exist", () => {
    nums = [2, 7, 11, 15];
    target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
  it("return empty array if no sum exists", () => {
    nums = [2, 7, 11, 15];
    target = 3;
    expect(twoSum(nums, target)).toEqual([]);
  });
  it("should return the indices of two numbers that sum to target even if negative numbers are present", () => {
    nums = [40, -3, 11, 3];
    target = 0;
    expect(twoSum(nums, target)).toEqual([1, 3]);
  });
});
