const search = require("../01problems/binarySearch704");

describe("binarySearch", () => {
  let nums, target;
  it("return index of num if target exists", () => {
    nums = [-1, 0, 3, 5, 9, 12];
    target = 9;
    expect(search(nums, target)).toEqual(4);
  });
  it("return -1 if target does not exist", () => {
    nums = [-1, 0, 3, 5, 9, 12];
    target = 2;
    expect(search(nums, target)).toEqual(-1);
  });
});
