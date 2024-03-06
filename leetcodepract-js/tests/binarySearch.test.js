const search = require("../01problems/binarySearch704");

describe("binarySearch", () => {
  let nums, target;
  it("return true if target exists", () => {
    nums = [-1, 0, 3, 5, 9, 12];
    target = 9;
    expect(search(nums, target)).toEqual(4);
  });
});
