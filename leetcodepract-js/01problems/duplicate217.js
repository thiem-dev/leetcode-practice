/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const set = new Set(); //items in a set must be unique

  for (const num of nums) {
    if (set.has(num)) {
      return true; //found duplicate
    } else {
      set.add(num); //otherwise add to set
    }
  }

  return false; //no duplicates
};

module.exports = containsDuplicate;

// test cases
const nums1 = [1, 2, 3, 4, 5];
console.log(containsDuplicate(nums1)); // Output: false

const nums2 = [1, 2, 3, 4, 1];
console.log(containsDuplicate(nums2)); // Output: true
