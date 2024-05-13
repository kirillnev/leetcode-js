const {longestCommonPrefix} = require('./task00014');

test.each([
    [["flower","flow","flight"], "fl"],
    [["dog","racecar","car"], ""],
    ["a", "a"],
])('Function longestCommonPrefix(%s)', (strs, excepted) => {
    expect(longestCommonPrefix(strs)).toEqual(excepted);
});