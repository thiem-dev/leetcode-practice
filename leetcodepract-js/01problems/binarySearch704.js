/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // divide the array in half (rounded down) and test index if greater or less than. loop through left array or right array;
  const foundIndex = searchHelper(nums, target);
  return foundIndex;

  function searchHelper(halfArr, target) {
    let middleIndex = Math.floor(nums.length / 2);
    if (nums[middleIndex] === target) {
      return nums[middleIndex]; //foundIndex
    }
    //less than
    if (nums[middleIndex] < target) halfArr = nums.slice(0, middleIndex);
    searchHelper(halfArr, target);
    //greater than
    if (nums[middleIndex] > target) {
      halfArr = nums.slice(middleIndex, nums.length - 1);
      searchHelper(halfArr, target);
    }
  }
};
