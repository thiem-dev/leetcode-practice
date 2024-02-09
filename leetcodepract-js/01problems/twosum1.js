/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numIndex = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = Math.abs(nums[i] - target);
    if (numIndex.hasOwnProperty(complement)) {
      return [numIndex[complement], i]; //two sums found, return indexes
    }
    numIndex[nums[i]] = i; //add to index
  }
  return false; //no twosums found
};

module.exports = twoSum;
