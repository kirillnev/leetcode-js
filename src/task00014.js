/**
 * 14. Longest Common Prefix
 * {@link https://leetcode.com/problems/longest-common-prefix/description/}
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let res = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if(strs[0].slice(0, i + 1) !== strs[j].slice(0, i + 1)) {
                return res;
            }
        }
        res += strs[0][i];
    }
    return res;
};

module.exports = {longestCommonPrefix};