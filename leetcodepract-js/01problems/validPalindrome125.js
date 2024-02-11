/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // remove non-alphanumeric characters
  if (s === " ") {
    return true;
  }
  const newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = newStr.length - 1;

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
