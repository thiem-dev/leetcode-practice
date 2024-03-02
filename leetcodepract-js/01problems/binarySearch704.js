/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // divide the array in half (rounded down) and test index if greater or less than. loop through left array or right array;
  const foundIndex = searchHelper(nums, target, 0, nums.length - 1);
  return foundIndex;

  function searchHelper(nums, target, left, right) {
    if (left > right) {
      return -1; //not found
    }

    let middleIndex = Math.floor((left + right) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex; //foundIndex
    }

    if (nums[middleIndex] > target) {
      return searchHelper(nums, target, left, middleIndex - 1); //search left
    } else {
      return searchHelper(nums, target, middleIndex + 1, right); //search right
    }
  }
};

module.exports = search;
