/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === "" || s === " " || !s) {
    return false; //empty strings
  }

  const stack = [];
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (bracketPairs[char]) {
      stack.push(char); //if opening brack, push char to stack
    } else {
      if (stack.length === 0) {
        return false;
      }
    }
  }
};

module.exports = isValid;
