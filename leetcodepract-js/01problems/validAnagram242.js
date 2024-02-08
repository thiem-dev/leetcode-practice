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
    let count = letterMap.get(char) || 0; //if found 1, else 0
    letterMap.set(char, count + 1); //increment leter if found
  }

  // subtract items of map s from chars of t
};

module.exports = isAnagram;
