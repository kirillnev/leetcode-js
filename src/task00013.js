/**
 * 13. Roman to Integer
 * {@link https://leetcode.com/problems/roman-to-integer/description/}
 * @param {string} s
 * @return {number}
 */

const romanToInt = function(s) {
    const Roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        const current = Roman[s[i]];
        const next = Roman[s[i + 1]];
        res += current < next ? -current : current;
    }
    return res;
};

module.exports = {romanToInt};