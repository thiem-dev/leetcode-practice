/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // remove non-alphanumeric characters
  if (s === " ") {
    return true;
  }
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let leftpt = 0;
  let rightpt = s.length - 1;

  while (left < right) {
    // while(cleanedString[left])
    return true;
  }

  // console.log("cleaned string is:", cleanedString);
};

module.exports = isPalindrome;
