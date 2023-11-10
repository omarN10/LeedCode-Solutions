/* 
problem link:
https://leetcode.com/problems/roman-to-integer/description/
 */

//solution

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x == x.toString().split("").reverse().join("");
};
