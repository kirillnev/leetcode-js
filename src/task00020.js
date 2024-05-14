/**
 * 20. Valid Parentheses
 * {@link https://leetcode.com/problems/valid-parentheses/description/}
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const Parentheses = {
        '[': ']',
        '(': ')',
        '{': '}',
    };

    let arr = [];

    for (const ch of s) {
        if(ch in Parentheses) {
            arr.push(ch);
        } else {
            const last = arr.pop();
            if (ch !== Parentheses[last]) {
                return false;
            }
        }
    }
    return arr.length === 0;
};

module.exports = {isValid};