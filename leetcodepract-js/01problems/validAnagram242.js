/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// source: https://leetcode.com/problems/valid-anagram/
// O(n^2) operation

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false; //can't be anagram is not same length
  }

  const letterMap = new Map();

  // count letters of s into a map
  for (let char of s) {
    let charCount = letterMap.get(char) || 0; //if found 1, else 0
    letterMap.set(char, charCount + 1); //increment leter if found
  }

  // subtract items of map s from chars of t
  for (let char of t) {
    if (!letterMap.has(char)) {
      return false; //does not have same letters, not anagram
    }
    let charCount = letterMap.get(char);
    letterMap.set(char, charCount - 1);
    if (letterMap.get(char) === 0) {
      letterMap.delete(char); //remove entry if empty
    }
  }
  return letterMap.size === 0; //if letterMap is empty then all letters accounted for so it is anagram
};

module.exports = isAnagram;
