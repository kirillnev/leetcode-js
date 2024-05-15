/**
 * 28. Find the Index of the First Occurrence in a String
 * {@link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/}
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let j = i;
        let k = 0
        while (haystack[j] === needle[k] && j++ < haystack.length && k++ < needle.length){}
        if (k === needle.length) {
            return i;
        }
    }
    return -1;
    // return haystack.indexOf(needle);
};

module.exports = {strStr};