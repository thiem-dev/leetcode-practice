/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === " ") {
    return true;
  }

  // remove non-alphanumeric characters and spaces
  const newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = newStr.length - 1;

  // left pointer moves up as right pointer moves backwards, compare till complete
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

module.exports = isPalindrome;
