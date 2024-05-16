/**
 * 1768. Merge Strings Alternately
 * {@link https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75}
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let res = "";
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        res += (word1[i] ?? "") + (word2[i] ?? "");
    }
    return res;
};

module.exports = {mergeAlternately};