/**
 * 205. Isomorphic Strings
 * @description Given two strings s and t, determine if they are isomorphic.
 *              Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *              All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * @link https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let sToT = new Map();
    let tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        if ((sToT.has(s[i]) && sToT.get(s[i]) !== t[i]) ||
            (tToS.has(t[i]) && tToS.get(t[i]) !== s[i])) return false;

        sToT.set(s[i], t[i]);
        tToS.set(t[i], s[i]);
    }
    return true;
};

module.exports = {isIsomorphic}