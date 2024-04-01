/**
 * 58. Length of Last Word
 * @description Given a string s consisting of words and spaces, return the length of the last word in the string.
 *              A word is a maximal substring consisting of non-space characters only.
 * @link https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").map((el) => el.length).at(-1);
};

module.exports = {lengthOfLastWord};